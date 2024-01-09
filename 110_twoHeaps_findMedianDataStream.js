
var MedianFinder = function() {

    this.smallVals = [] //maxHeap
    this.largeVals = [] //minHeap
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

    this.smallVals.push(num)
    this.smallVals.sort((a, b) => a - b)

    //make sure that every element in small <= than every element in large

    if (this.smallVals.length && this.largeVals.length && this.smallVals.at(-1) > this.largeVals.at(-1)) {

        let val = this.smallVals.pop()
        this.largeVals.push(val)
        this.largeVals.sort((a, b) => b - a)

    }

    //if size is uneven
    if (this.smallVals.length > this.largeVals.length + 1) {
        let val = this.smallVals.pop()
        this.largeVals.push(val)
        this.largeVals.sort((a, b) => b - a)
    }

    if (this.largeVals.length > this.smallVals.length + 1) {

        let val = this.largeVals.pop()
        this.smallVals.push(val)
        this.smallVals.sort((a, b) => a - b)

    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    if (this.smallVals.length > this.largeVals.length) return this.smallVals.at(-1)
    if (this.smallVals.length < this.largeVals.length) return this.largeVals.at(-1)

    return (this.smallVals.at(-1) + this.largeVals.at(-1)) / 2

};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */