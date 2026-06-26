class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {}
        for (let i = 0; i < nums.length; i++) {
            if (freq[nums[i]]) {
                freq[nums[i]]++
            } else {
                freq[nums[i]] = 1
            }
        }
        let bucket = Array(nums.length+1).fill().map(() => [])
        for (let key in freq) {
            bucket[freq[key]].push(Number(key))
        }

        let result=[];
        for(let i=bucket.length-1;i>=0;i--){
            if(bucket[i].length>0){
                result.push(...bucket[i])
            }
        }
        return result.slice(0,k)
    }
}
