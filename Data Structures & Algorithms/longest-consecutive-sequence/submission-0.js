class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set= new Set(nums);
        let maxlength=0;

        for(let num of set){
            if(!set.has(num-1)){
                let curr=num;

                while(set.has(curr+1)){
                    curr++
                }
        maxlength = Math.max(maxlength,curr-num+1)
            }
        }
        return maxlength
    }
}
