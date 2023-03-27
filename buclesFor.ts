function evenNumbers(num){

    for(let i=0; i<= num; i++){

    if(i % 2 !==0){
     console.log(i);
        
    }
    }
}

// evenNumbers(9);





function myRevert(myArr){
let nombre = [];

   for(let i = myArr.length -1; i >=0; i--){
         nombre.push(myArr[i]);
          }

        return nombre;
}

// console.log(myRevert("regresar"));







function isRainbow(colors){
    let Colors = ["rojo", "amarillo", "azul", "verde", "violeta", "naranja"];

    for(let i=0; i < Colors.length; i++){
        if(Colors[i] == colors){
            console.log("esta en el arcoiris");
            
        }
        else {
            console.log("no esta en el arcoiris");
            
        }
    }
}

// isRainbow("naranja");







export function add(myWords){
    

    let suma = 0;
    for(let i = 0; i < myWords.length; i++){
        suma += myWords[i].length
    }
    return suma;
}


// console.log(add ('concentracion'));




