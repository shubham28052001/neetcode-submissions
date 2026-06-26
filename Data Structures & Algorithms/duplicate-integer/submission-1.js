class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq={};
        for (let i = 0; i < nums.length; i++) {
            if (freq.hasOwnProperty(nums[i])) {
                return true
            }
            freq[nums[i]] = nums[i];
        }
        return false;
    }
}
