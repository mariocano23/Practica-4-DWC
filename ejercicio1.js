"use strict";

//Ejemplo de sudoku correcto.
let sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];
//Ejemplo de sudoku incorrecto.
let sudokuIncorrecto = [];
sudokuIncorrecto[0] = [2, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuIncorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

let sudokuIncorrecto2 = [];
sudokuIncorrecto2[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[1] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[3] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[4] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[5] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[6] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[7] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto2[8] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function compruebaSudokus(sudoku){
let correcto = true;
for (let index = 0; index < sudoku.length; index++) {
    sudoku[index].sort();
    console.log(sudoku[index]);
}
for (let index = 0; index < sudoku.length; index++) {
    for (let subIndex = 0; subIndex < sudoku[index].length; subIndex++) {
        if(!(sudoku[index].includes(subIndex+1))){
            correcto=false;
        }
    }
    for (let subIndex = 0; subIndex < sudoku[index].length; subIndex++) {
        if((sudoku[subIndex][index]!=(index+1))){
            correcto=false;
            console.log(sudoku[subIndex][index]); 
        }
    }

}
    return correcto;
}

console.log(compruebaSudokus(sudokuCorrecto));