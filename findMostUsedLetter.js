let string = 'mynewblackcatandwhitedog';

const findMostUsedLetter = function () {
    let oftenLeter = '';
    let oftenLeterTimes = 0;

    for (let i = 0; i < string.length; i++){
        const currentLetter = string[i];
        let currentLetterTimes = 0;

        for (let j = 0; j < string.length; j++){
            if (string[j] === currentLetter){
                currentLetterTimes++
            }
        }

        if (currentLetterTimes > oftenLeterTimes){
            oftenLeterTimes = currentLetterTimes;
            oftenLeter = currentLetter;
        }
    }

    return oftenLeter;
};


console.log(findMostUsedLetter(string));