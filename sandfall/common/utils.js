function arrayToMatrix(arr, n, m) {
    if (n * m !== arr.length) {
        throw new Error("Array size does not match the matrix dimensions");
    }

    var matrix = [];
    for (var i = 0; i < n; i++) {
        var row = [];
        for (var j = 0; j < m; j++) {
            row.push(arr[i * m + j]);
        }
        matrix.push(row);
    }

    return matrix;
}
