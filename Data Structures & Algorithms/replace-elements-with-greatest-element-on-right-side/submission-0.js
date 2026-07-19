class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
       for(let i=0;i<arr.length;i++){
            let max=-Infinity;
            for(let j=i+1;j<arr.length;j++){
              if(max<arr[j]){
                  max=arr[j]
              }
            }
            if(max===-Infinity){
                arr[i]=-1
            }else{
                arr[i]=max
            }
        }
        return arr;
    }
}
