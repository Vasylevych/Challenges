let str = 'deeccus lliw uoY';

const reverse = function () {
    let rev = '';

    for(let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }

    return rev;
};


console.log(reverse(str));
