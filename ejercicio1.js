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
let region1= [sudoku[0][0],sudoku[0][1],sudoku[0][2],sudoku[1][0],sudoku[1][1],sudoku[1][2],sudoku[2][0],sudoku[2][1],sudoku[2][2],];
let region2= [sudoku[0][3],sudoku[0][4],sudoku[0][5],sudoku[1][3],sudoku[1][4],sudoku[1][5],sudoku[2][3],sudoku[2][4],sudoku[2][5],];
let region3= [sudoku[0][6],sudoku[0][7],sudoku[0][8],sudoku[1][6],sudoku[1][7],sudoku[1][8],sudoku[2][6],sudoku[2][7],sudoku[2][8],];
let region4= [sudoku[3][0],sudoku[3][1],sudoku[3][2],sudoku[4][0],sudoku[4][1],sudoku[4][2],sudoku[5][0],sudoku[5][1],sudoku[5][2],];
let region5= [sudoku[3][3],sudoku[3][4],sudoku[3][5],sudoku[4][3],sudoku[4][4],sudoku[4][5],sudoku[5][3],sudoku[5][4],sudoku[5][5],];
let region6= [sudoku[3][6],sudoku[3][7],sudoku[3][8],sudoku[4][6],sudoku[4][7],sudoku[4][8],sudoku[5][6],sudoku[5][7],sudoku[5][8],];
let region7= [sudoku[6][0],sudoku[6][1],sudoku[6][2],sudoku[7][0],sudoku[7][1],sudoku[7][2],sudoku[8][0],sudoku[8][1],sudoku[8][2],];
let region8= [sudoku[6][3],sudoku[6][4],sudoku[6][5],sudoku[7][3],sudoku[7][4],sudoku[7][5],sudoku[8][3],sudoku[8][4],sudoku[8][5],];
let region9= [sudoku[6][6],sudoku[6][7],sudoku[6][8],sudoku[7][6],sudoku[7][7],sudoku[7][8],sudoku[8][6],sudoku[8][7],sudoku[8][8],];
for (let index = 0; index < sudoku.length; index++) { //comprobador de regiones.
    if(!((region1.includes(index+1))&&region2.includes(index+1)&&region3.includes(index+1)&&region4.includes(index+1)&&region5.includes(index+1)&&region6.includes(index+1)&&region7.includes(index+1)&&region8.includes(index+1)&&region9.includes(index+1))){
        correcto=false;
    }
    
}
for (let index = 0; index < sudoku.length; index++) {
    let arrayColumna=[]
    for (let subIndex = 0; subIndex < sudoku[index].length; subIndex++) { //generador de Arrays para comprobar las columnas.
        arrayColumna[subIndex]=sudoku[subIndex][index];
    }
    for (let subIndex = 0; subIndex < sudoku[index].length; subIndex++) {
        if(!((sudoku[index].includes(subIndex+1))&&arrayColumna.includes(subIndex+1))){ //comprobador de filas y columnas.
            correcto=false;
        }
    }
    

}
    return correcto;
}

console.log(`¿Es el sudoku correcto? ${compruebaSudokus(sudokuCorrecto)}.`);