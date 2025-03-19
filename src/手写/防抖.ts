/**
 * 防抖函数（立即执行版本）
 *
 * @param func - 需要防抖处理的函数
 * @param wait - 等待时间，单位为毫秒
 * @param immediate - 是否立即执行，默认为 false
 * @returns 防抖处理后的函数
 */
function debounce(func: (...args: any[]) => void, wait: number, immediate: boolean = false): (...args: any[]) => void {
    let timeout: NodeJS.Timeout | null;

    return function(...args: any[]) {
        const context = this; // 保存 this 上下文
        const later = () => {
            timeout = null;
            if (!immediate) {
                func.apply(context, args); // 执行函数
            }
        };

        const callNow = immediate && !timeout;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
}

// 示例使用
const handleInput = (value: string) => {
    console.log('Input value:', value);
};

// 创建一个防抖处理后的函数，等待时间为 300 毫秒
const debouncedInput = debounce(handleInput, 300);

// 监听输入框输入事件
const inputElement = document.getElementById('inputBox');
if (inputElement) {
    inputElement.addEventListener('input', (event: any) => {
        debouncedInput(event.target.value);
    });
}