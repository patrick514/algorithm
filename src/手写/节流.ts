/**
 * 节流函数
 *
 * @param func - 需要节流处理的函数
 * @param wait - 等待时间，单位为毫秒
 * @returns 节流处理后的函数
 */
function throttle(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
    let timeout: NodeJS.Timeout | null = null;
    let lastExecutionTime: number = 0;

    return function(...args: any[]) {
        const now = Date.now();

        // 计算距离上次执行的时间差
        const timeSinceLastExecution = now - lastExecutionTime;

        // 如果时间差大于等待时间，立即执行函数
        if (timeSinceLastExecution >= wait) {
            if (timeout !== null) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastExecutionTime = now;
            func.apply(this, args);
        } else if (timeout === null) {
            // 否则，设置一个定时器，在剩余时间后执行函数
            const timeRemaining = wait - timeSinceLastExecution;
            timeout = setTimeout(() => {
                lastExecutionTime = Date.now();
                timeout = null;
                func.apply(this, args);
            }, timeRemaining);
        }
    };
}

// 示例使用
const handleScroll = () => {
    console.log('Scroll event triggered');
};

// 创建一个节流处理后的函数，等待时间为 200 毫秒
const throttledScroll = throttle(handleScroll, 200);

// 监听滚动事件
window.addEventListener('scroll', throttledScroll);