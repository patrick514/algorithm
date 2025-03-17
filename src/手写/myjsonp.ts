/**
 * JSONP 请求函数
 *
 * @param url - 请求的 URL
 * @param params - 请求的参数对象
 * @param callbackName - 回调函数的名称
 * @returns 一个 Promise，在请求成功时解析数据
 */
function jsonp(url: string, params: Record<string, any>, callbackName: string): Promise<any> {
    return new Promise((resolve, reject) => {
        // 创建一个唯一的回调函数名称
        const callbackFunctionName = `jsonp_callback_${Date.now()}`;

        // 将回调函数名称添加到全局对象中
        (window as any)[callbackFunctionName] = (data: any) => {
            // 请求成功时，调用 resolve 并传递数据
            resolve(data);
            // 清理回调函数和 script 标签
            delete (window as any)[callbackFunctionName];
            document.body.removeChild(script);
        };

        // 将参数对象转换为查询字符串
        const queryString = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');

        // 创建 script 标签
        const script = document.createElement('script');
        script.src = `${url}?${queryString}&callback=${callbackFunctionName}`;
        script.onerror = () => {
            // 请求失败时，调用 reject
            reject(new Error('JSONP request failed'));
            // 清理回调函数和 script 标签
            delete (window as any)[callbackFunctionName];
            document.body.removeChild(script);
        };

        // 将 script 标签添加到文档中
        document.body.appendChild(script);
    });
}

// 示例使用
const url = 'https://example.com/api';
const params = { foo: 'bar', baz: 'qux' };
jsonp(url, params, 'callback')
    .then(data => {
        console.log('请求成功:', data);
    })
    .catch(error => {
        console.error('请求失败:', error);
    });