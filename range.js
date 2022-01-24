function range(a,b) {
    let arr = [];
    let smaller = a;
    let bigger = b;

    if (a > b){
        smaller = b;
        bigger = a;
    }

    for (let i = smaller; i <= bigger; i++) {
        arr.push(i)
    }
    return console.log(arr);
}

range(1,19);