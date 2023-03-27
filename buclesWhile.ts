function hasEven(myNums) {
   
    let even = false;
    let i = 0;

    while (i < myNums.length && !even) {
        if(myNums[i] % 2 === 0){
            even = true;
            
        }
       i++;
    }
    return even;
   
}  console.log(hasEven([1, 3, 7]));





function startWithM(myNames){

    let result = true;
    let i = 0;

    while (result && i < myNames.length) {
        if(myNames[i][0] !== 'm'){
            result = false;
        }
       i++;
    }
     return result;
}
console.log(startWithM(['maria', 'mariana', 'mario']));




