function canCompleteCircuit(gas: number[], cost: number[]): number[] {
    let max : number[]  = []
    for(let i = 0;i<gas.length;i++){
        max[i] = gas[i] - cost[i]
    }
    
    return max


};
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))