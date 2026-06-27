class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let freq={};
        let even=Infinity;
        let odd=-Infinity;
        for(let i=0;i<s.length;i++){
            if(freq[s[i]]){
                freq[s[i]]++
            }else{
                freq[s[i]]=1
            }
        }

        for(let key in freq){
            if(freq[key]%2==0){
             even= Math.min(even,freq[key])
            }else{
             odd=Math.max(odd,freq[key])
            }
        }

        return odd-even
    }
}
