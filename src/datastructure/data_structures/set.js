class Set {
  constructor() {
    this.items = {}
  }

  // has(element){
  //   return element in items
  // }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    else {
      return false
    }
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear() {
    this.items = {}
  }

  // size(){
  //   return Object.keys(this.items).length
  // }
  size() {
    let count = 0
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }

  values() {
    return Object.values(this.items)
  }

  valuesLegacy() {
    let values = []
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key)
      }
    }
    return values
  }

  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  // intersection(otherSet){
  //   const intersection = new Set()
  //   const values = this.values()
  //   for(let i = 0; i<values.length;i++){
  //     if(otherSet.has(values[i])){
  //       intersection.add(values[i])
  //     }
  //   }
  //   return intersection
  // }

  //improve
  intersection(otherSet) {
    const intersection = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersection.add(value)
      }
    })
    return intersection
  }

  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isubset = true
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isubset = false
        return false
      } else {
        return true
      }
    })
    return isubset
  }

}

const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));