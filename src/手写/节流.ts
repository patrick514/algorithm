/**
 * 节流函数
 * 
 * @param func - 需要节流处理的函数
 * @param wait - 等待时间，单位为毫秒
 * @param options - 配置选项
 * @param options.leading - 是否在开始时立即执行，默认为true
 * @param options.trailing - 是否在结束时执行，默认为true
 * @returns 节流处理后的函数
 */
function throttle<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
    options: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;
    let previous = 0; // 上次执行时间
    let result: any;
    
    // 设置默认选项
    const { leading = true, trailing = true } = options;
    
    return function(...args: Parameters<T>) {
        const context = this;
        const now = Date.now();
        
        // 如果是第一次调用且不需要立即执行
        if (!previous && leading === false) {
            previous = now;
        }
        
        // 计算剩余等待时间
        const remaining = wait - (now - previous);
        
        // 如果已经到了执行时间或者系统时间被调整
        if (remaining <= 0 || remaining > wait) {
            // 如果有定时器，清除它
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            
            // 更新上次执行时间
            previous = now;
            
            // 执行函数
            result = func.apply(context, args);
        } else if (!timeout && trailing) {
            // 如果没有定时器且需要在结束时执行
            timeout = setTimeout(() => {
                // 更新上次执行时间
                previous = leading ? Date.now() : 0;
                
                // 清除定时器标记
                timeout = null;
                
                // 执行函数
                result = func.apply(context, args);
            }, remaining);
        }
        
        return result;
    };
}

// 使用示例
function handleScroll(event: Event) {
    console.log('Scroll event:', event.type);
}

// 创建一个节流处理后的函数，每200毫秒最多执行一次
const throttledScroll = throttle(handleScroll, 200);

// 示例：监听滚动事件
window.addEventListener('scroll', throttledScroll);

// 示例：不在开始时立即执行的节流函数
const throttledScrollNoLeading = throttle(handleScroll, 200, { leading: false });

// 示例：只在开始时执行的节流函数（不在结束时执行）
const throttledScrollNoTrailing = throttle(handleScroll, 200, { trailing: false });