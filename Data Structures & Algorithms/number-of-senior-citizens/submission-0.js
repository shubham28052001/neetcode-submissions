class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let Senior=0;
       for(let i=0;i<details.length;i++){
         let val=details[i].slice(11,13)
         if(val>60){
            Senior++
         }
       } 
    return Senior
    }
}
