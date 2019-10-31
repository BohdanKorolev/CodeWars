function rowSumOddNumbers(n) {
    var sum = 0, firstN = 1, rowStep = 2;
    for(var i = 1; i <= n; i++){
        if(i == n){
            for(var c = 1; c <= n; c++){
                sum += firstN;
                firstN+=2;
            }
        }
        firstN+=rowStep;
        rowStep+=2;
    }
    return sum;
}
function GetSum( a,b ) {
    var i = a, j = b, sum = 0;
    if(a<=b){
        for(;i <= j;i++) sum += i;
    }else{
        for(; i >=j;i--) sum +=i;
    }
    return sum;
}
function towerBuilder(nFloors) {
    var i = 0, j;
    var elka = [];
    var space, star;

    while (i < nFloors) {
        space = "";
        star = "";
        for (j = 0; j < nFloors - i - 1; j++) space += " ";
        for (j = 0; j < 2 * i + 1; j++) star += "*";
        elka.push(space + star + space);
        // console.log(space + star + space);
        i++;
    }
    return elka;
}
function diamond(n) {
    if (n<3 || n%2 == 0) return null;
    var i = 0, j;
    var diam = "";
    var space, star;

    while (i < Math.ceil(n/2)) {
        space = "";
        star = "";
        for (j = 0; j < 2 * i + 1; j++) star += "*";
        for (j = 0; j < Math.ceil(n/2) - i - 1; j++) space += " ";
        diam += space + star + "\n";
        i++;
    }
    i = Math.floor(n/2) - 1 ;
    while (i >= 0) {
        space = "";
        star = "";
        for (j = 0; j < 2 * i + 1; j++) star += "*";
        for (j = 0; j < Math.ceil(n/2) - i - 1; j++) space += " ";
        diam += space + star + "\n";
        i--;
    }
    return diam;
}
function arithmetic(a, b, operator){
    switch (operator) {
        case "add": return a+b;
        case "subtract": return a-b;
        case "multiply": return a*b;
        case "divide": return a/b;
    }
}
function descendingOrder(n){
    var number = n+"";
    var newNumber = "";
    var newNumberArr = number.split("");
    newNumberArr = newNumberArr.sort();
    newNumberArr = newNumberArr.reverse();
    for(var i of newNumberArr){
        newNumber += i;
    }
    newNumber = Number(newNumber);
    return newNumber;
}
function iqTest(numbers){
    numbers = numbers.split(" ");
    var chet = 0, nechet = 0;
    for (var number of numbers){
        (Number(number)%2)? nechet++: chet++;
    }
    if (nechet > chet){
        for(var i = 0; i < numbers.length; i++){
            if(Number(numbers[i])%2 == 0) return(i+1);
        }
    }else{
        for(var i = 0; i < numbers.length; i++){
            if(Number(numbers[i])%2 == 1) return(i+1);
        }
    }
}
function moveZeros(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length;){
        if(arr[i] === 0) {
            newArr += arr.slice(i, i + 1);
            arr.splice(i, 1);
        }else{
            i++;
        }
    }
    newArr = newArr.split("");
    for(var j = 0; j < newArr.length; j++){
        newArr[j] = Number(newArr[j]);
    }
    return (arr.concat(newArr));
}
