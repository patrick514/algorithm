/**
 * Promise状态
 */
enum PromiseState {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}

/**
 * 自定义Promise实现
 */
class MyPromise<T> {
  private state: PromiseState = PromiseState.PENDING;
  private value: T | undefined;
  private reason: any;
  private onFulfilledCallbacks: Array<(value: T) => void> = [];
  private onRejectedCallbacks: Array<(reason: any) => void> = [];

  constructor(executor: (resolve: (value: T) => void, reject: (reason: any) => void) => void) {
    const resolve = (value: T) => {
      if (this.state === PromiseState.PENDING) {
        this.state = PromiseState.FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback(value));
      }
    };

    const reject = (reason: any) => {
      if (this.state === PromiseState.PENDING) {
        this.state = PromiseState.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  /**
   * then方法
   */
  then<TResult1 = T, TResult2 = never>(
    onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
    onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
  ): MyPromise<TResult1 | TResult2> {
    // 处理可选参数
    const realOnFulfilled = typeof onFulfilled === 'function' 
      ? onFulfilled 
      : (value: T) => value as unknown as TResult1;
    
    const realOnRejected = typeof onRejected === 'function'
      ? onRejected
      : (reason: any) => { throw reason; };

    // 创建新的Promise用于链式调用
    const promise2 = new MyPromise<TResult1 | TResult2>((resolve, reject) => {
      const fulfilledMicrotask = () => {
        setTimeout(() => {
          try {
            if (this.value === undefined) {
              throw new Error('Promise value is undefined');
            }
            const x = realOnFulfilled(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      };

      const rejectedMicrotask = () => {
        setTimeout(() => {
          try {
            const x = realOnRejected(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      };

      if (this.state === PromiseState.FULFILLED) {
        fulfilledMicrotask();
      } else if (this.state === PromiseState.REJECTED) {
        rejectedMicrotask();
      } else {
        // PENDING状态，存储回调
        this.onFulfilledCallbacks.push(() => fulfilledMicrotask());
        this.onRejectedCallbacks.push(() => rejectedMicrotask());
      }
    });

    return promise2;
  }

  /**
   * 处理Promise解析过程
   */
  private resolvePromise<TResult>(
    promise: MyPromise<TResult>,
    x: any,
    resolve: (value: TResult) => void,
    reject: (reason: any) => void
  ): void {
    // 如果promise和x引用同一个对象，抛出TypeError
    if (promise === x) {
      reject(new TypeError('Chaining cycle detected for promise'));
      return;
    }

    // 如果x是一个Promise
    if (x instanceof MyPromise) {
      x.then(
        value => this.resolvePromise(promise, value, resolve, reject),
        reject
      );
      return;
    }

    // 如果x是一个对象或函数
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      let called = false;

      try {
        const then = x.then;
        
        if (typeof then === 'function') {
          // 如果then是一个函数，把x作为this调用它
          then.call(
            x,
            (y: any) => {
              if (called) return;
              called = true;
              this.resolvePromise(promise, y, resolve, reject);
            },
            (r: any) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } else {
          // 如果then不是函数，直接用x完成promise
          resolve(x as TResult);
        }
      } catch (error) {
        if (called) return;
        called = true;
        reject(error);
      }
    } else {
      // 如果x不是对象或函数，直接用x完成promise
      resolve(x as TResult);
    }
  }

  /**
   * catch方法，用于错误处理
   */
  catch<TResult = never>(
    onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null
  ): MyPromise<T | TResult> {
    return this.then(null, onRejected);
  }

  /**
   * finally方法，无论成功失败都会执行
   */
  finally(onFinally?: (() => void) | null): MyPromise<T> {
    return this.then(
      value => {
        if (onFinally) onFinally();
        return value;
      },
      reason => {
        if (onFinally) onFinally();
        throw reason;
      }
    );
  }

  /**
   * 静态resolve方法
   */
  static resolve<TValue>(value?: TValue | PromiseLike<TValue>): MyPromise<TValue> {
    // 如果传入的是MyPromise实例，直接返回
    if (value instanceof MyPromise) {
      return value as unknown as MyPromise<TValue>;
    }

    // 创建一个新的已fulfilled的Promise
    return new MyPromise<TValue>((resolve) => {
      resolve(value as TValue);
    });
  }

  /**
   * 静态reject方法
   */
  static reject<TValue = never>(reason?: any): MyPromise<TValue> {
    return new MyPromise<TValue>((_, reject) => {
      reject(reason);
    });
  }

  /**
   * 静态all方法
   */
  static all<T>(promises: Array<T | PromiseLike<T>>): MyPromise<T[]> {
    return new MyPromise<T[]>((resolve, reject) => {
      if (promises.length === 0) {
        resolve([]);
        return;
      }

      const results: T[] = new Array(promises.length);
      let completedCount = 0;

      for (let i = 0; i < promises.length; i++) {
        // 将每个promise或值转换为promise
        MyPromise.resolve(promises[i]).then(
          value => {
            results[i] = value;
            completedCount++;
            
            if (completedCount === promises.length) {
              resolve(results);
            }
          },
          reject
        );
      }
    });
  }

  /**
   * 静态race方法
   */
  static race<T>(promises: Array<T | PromiseLike<T>>): MyPromise<T> {
    return new MyPromise<T>((resolve, reject) => {
      for (const promise of promises) {
        MyPromise.resolve(promise).then(resolve, reject);
      }
    });
  }

  /**
   * 静态allSettled方法 (ES2020)
   */
  static allSettled<T>(promises: Array<T | PromiseLike<T>>): MyPromise<Array<{ status: 'fulfilled' | 'rejected', value?: T, reason?: any }>> {
    return new MyPromise((resolve) => {
      if (promises.length === 0) {
        resolve([]);
        return;
      }

      const results: Array<{ status: 'fulfilled' | 'rejected', value?: T, reason?: any }> = new Array(promises.length);
      let completedCount = 0;

      for (let i = 0; i < promises.length; i++) {
        MyPromise.resolve(promises[i]).then(
          value => {
            results[i] = { status: 'fulfilled', value };
            completedCount++;
            
            if (completedCount === promises.length) {
              resolve(results);
            }
          },
          reason => {
            results[i] = { status: 'rejected', reason };
            completedCount++;
            
            if (completedCount === promises.length) {
              resolve(results);
            }
          }
        );
      }
    });
  }

  /**
   * 静态any方法 (ES2021)
   */
  static any<T>(promises: Array<T | PromiseLike<T>>): MyPromise<T> {
    return new MyPromise<T>((resolve, reject) => {
      if (promises.length === 0) {
        reject(new AggregateError([], 'All promises were rejected'));
        return;
      }

      let rejectedCount = 0;
      const errors: any[] = new Array(promises.length);

      for (let i = 0; i < promises.length; i++) {
        MyPromise.resolve(promises[i]).then(
          resolve,
          reason => {
            errors[i] = reason;
            rejectedCount++;
            
            if (rejectedCount === promises.length) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          }
        );
      }
    });
  }
}

// 测试用例
function testMyPromise() {
  console.log('Starting Promise tests...');
  
  // 基本功能测试
  const promise1 = new MyPromise<number>((resolve) => {
    setTimeout(() => resolve(1), 100);
  });
  
  promise1.then(value => {
    console.log('Promise resolved with value:', value);
    return value * 2;
  }).then(value => {
    console.log('Chained promise value:', value);
  });

  // 错误处理测试
  const promise2 = new MyPromise<number>((_, reject) => {
    setTimeout(() => reject(new Error('Something went wrong')), 100);
  });
  
  promise2.then(
    value => console.log('This should not execute:', value),
    error => console.log('Caught error:', error.message)
  ).catch(error => {
    // 这里不会执行，因为错误已经被处理
    console.log('This should not execute in catch:', error);
  });

  // 静态方法测试
  MyPromise.resolve('Directly resolved').then(value => {
    console.log('Static resolve test:', value);
  });

  MyPromise.all([
    MyPromise.resolve(1),
    Promise.resolve(2), // 兼容原生Promise
    3
  ]).then(values => {
    console.log('Promise.all result:', values);
  });

  MyPromise.race([
    new MyPromise(resolve => setTimeout(() => resolve('fast'), 100)),
    new MyPromise(resolve => setTimeout(() => resolve('slow'), 200))
  ]).then(value => {
    console.log('Promise.race winner:', value);
  });
}

// 运行测试
testMyPromise();

export default MyPromise;