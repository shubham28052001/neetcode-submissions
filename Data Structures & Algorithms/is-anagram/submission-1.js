class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let freq = {};

        if(s.length!==t.length){
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            if (freq[s[i]]) {
                freq[s[i]]++
            } else {
                freq[s[i]] = 1
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (freq[t[i]]) {
                 freq[t[i]]--
            }else{
                return false
            }
           
        }
        return true;

    }
}
