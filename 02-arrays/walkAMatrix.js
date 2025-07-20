/**
 * @param {List[List[int]]} matrix
 * @return {List[int]}
 */


const walkMatrix = (matrix) => {
  let rowCount = matrix.length;
  let columnCount = matrix[0].length;
  const res = [];

  // 
  for (let i = 0; i <= columnCount - 1; i++) {
    res.push(matrix[i]);
  }


};
