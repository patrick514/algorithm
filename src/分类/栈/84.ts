//柱状图中最大的矩形
function largestRectangleArea(heights: number[]): number {
    const stack:number[] = []
    let maxArea = 0
    for(let i = 0;i<heights.length;i++){
        while(stack.length > 0){
            if(heights[i] <stack[stack.length-1]){
                
            }
        }
        stack.push(heights[i])
    }
};