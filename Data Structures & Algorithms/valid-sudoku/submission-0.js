class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = new Array(9).fill().map(() => new Set());
        let column = new Array(9).fill().map(() => new Set());
        let boxes = new Array(9).fill().map(() => new Set());
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let value = board[i][j];
                if (value === ".") continue;

                let box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (
                    row[i].has(value) ||
                    column[j].has(value) ||
                    boxes[box].has(value)
                ) {
                    return false;
                }
                row[i].add(value);
                column[j].add(value);
                boxes[box].add(value);
            }
        }
        return true
    }
}
