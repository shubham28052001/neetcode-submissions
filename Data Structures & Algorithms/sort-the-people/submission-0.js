
class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = 0; j < heights.length - i - 1; j++) {
                if (heights[j] < heights[j + 1]) {
                    [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
                    [names[j], names[j + 1]] = [names[j + 1], names[j]];
                }
            }
        }
        return names;
    }
}
