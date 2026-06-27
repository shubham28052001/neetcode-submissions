class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freq={};

        for(let i=0;i<nums.length;i++){
            if(freq[nums[i]]){
                freq[nums[i]]++
            }else{
                freq[nums[i]]=1
            }

            if(freq[nums[i]]>nums.length/2){
                return nums[i];
            }
        }

    }
}
