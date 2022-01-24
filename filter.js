function filter(str, substring){
    let find = ' ';
    let substringIndex = 0;

    for (let i = 0; i < str.length; i++){
        console.log(str[i], ' - ', substring[substringIndex]);

        if(str[i] === substring[substringIndex]){
            substringIndex++;
        } else if (str[i] !== substring[0]){
            substringIndex = 1;
        } else {
            substringIndex = 0
        }
        
        console.log(find);
    };

    return find;
};

filter('bubbamfsdffootersfdgf', 'footers')
