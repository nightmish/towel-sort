
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let m = undefined;
    if (matrix == undefined) {
        m = [];    
        }
    else {
    if (matrix.length === 2) {
    matrix[1].reverse()
    m = (matrix.join()).split(",")   
    }
    else if (matrix.length === 3) {
    matrix[1].reverse()
    m = (matrix.join()).split(",")   
    }
    else if (matrix.length === 4) {
    matrix[1].reverse();
    matrix[3].reverse();
    m = (matrix.join()).split(",")   
    }
    else if (matrix.length === 5) {
    matrix[1].reverse();
    matrix[3].reverse(); 
    m = (matrix.join()).split(",")   
    }
    else if (matrix.length === 6) {
    matrix[1].reverse();
    matrix[3].reverse();
    matrix[5].reverse();
    m = (matrix.join()).split(",")   
    }
    else if (matrix.length === 7) {
    matrix[1].reverse();
    matrix[3].reverse();
    matrix[5].reverse();
    m = (matrix.join()).split(",")   
    }
    else if (matrix.length === 0) {
    m = [] 
    };
}
return m;

};

