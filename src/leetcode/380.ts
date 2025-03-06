class RandomizedSet {
    private indices: Map<number, number>;
    private nums: number[];
    constructor() {
        this.nums = []
        this.indices = new Map()
    }

    insert(val: number): boolean {
        if (this.indices.has(val)) {
            return false
        }
        let index = this.nums.length
        this.nums.push(val)
        this.indices.set(val, index)
        return true

    }

    remove(val: number): boolean {
        if (!this.indices.has(val)) {
            return false
        }
        else {
            let index = this.indices.get(val)
            if(index !==undefined){
              this.nums[index] = this.nums[this.nums.length - 1]  
              this.indices.set(this.nums[index],index)
              this.nums.pop()
              this.indices.delete(val)
            }
            
            return true
        }

    }

    getRandom(): number {
        return this.nums[Math.floor(Math.random() * this.nums.length)]

    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */