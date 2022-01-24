function showMultiplyTable(){
    for (let i = 1; i < 10; i++){
        let resultString = ' ';
        for(let j = 1; j < 10; j++){
            resultString = resultString + ' ' + j * i;
        };
        console.log('resultString: ', resultString);
    }
}

showMultiplyTable();