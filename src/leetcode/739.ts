function dailyTemperatures(temperatures: number[]): number[] {
    let ans: number[] = [];
    let stack: number[] = [];
    let i = 0;
    while (i <= temperatures.length) {
        let j = i + 1;
        if (j > temperatures.length) {
            ans.push(0);
        } else {
            while (j < temperatures.length) {
                if (temperatures[j] > temperatures[i]) {
                    ans.push(j - i);
                    stack = [];
                    break;
                } else {
                    stack.push(0);
                }
                j++;
            }
        }

        if (stack.pop() === 0) {
            ans.push(0);
        }

        stack = [];
        i++;
    }

    return ans;
};


// dailyTemperatures([30,60,90])
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
