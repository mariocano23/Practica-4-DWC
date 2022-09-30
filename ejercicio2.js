"use strict";

let minas=[];
minas[0]=[-1, 0, 0, 0];
minas[1]=[0, 0, 0, 0];
minas[2]=[0, -1, 0, 0];
minas[3]=[0, 0, 0, 0];

function buscaMinas(arrayMinas) {
    for (let index = 0; index < arrayMinas.length; index++) {
        
        for (let subIndex = 0; subIndex < arrayMinas[index].length; subIndex++) { //Este for recorre el alrededor de cada posición con un "-1" y suma 1.
            if(arrayMinas[index][subIndex]==-1){
                if(index-1>=0&&subIndex-1>=0){
                    arrayMinas[index-1][subIndex-1]+=1;
                }
                if(index-1>=0){
                    arrayMinas[index-1][subIndex]+=1;
                }
                if((index-1>=0)&&(subIndex-1<arrayMinas.length)){
                    arrayMinas[index-1][subIndex+1]+=1;
                }
                if(subIndex-1>=0){
                    arrayMinas[index][subIndex-1]+=1;
                }
                if(subIndex-1<arrayMinas.length){
                    arrayMinas[index][subIndex+1]+=1;
                }
                if((subIndex-1>=0)&&(index-1<arrayMinas.length)){
                    arrayMinas[index+1][subIndex-1]+=1;
                }
                if(index-1<arrayMinas.length){
                    arrayMinas[index+1][subIndex]+=1;
                }
                if((index-1<arrayMinas.length&&subIndex-1<arrayMinas.length)){
                    arrayMinas[index+1][subIndex+1]+=1;
                }
            }
        }
        
    }
    return arrayMinas;
}

console.log(buscaMinas(minas));