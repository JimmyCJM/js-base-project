/*
function main(number){
    var result = [];
    result = compare(number);
    console.log(result);
}

function compare(number){
    if(number > 1){
        result = print_99_downto_2(number);
    }
    else {
        result = printLast(number);
    }
    return result;
}

function print_99_downto_2(number) {
    let result = `${number} bottles of beer on the wall, ${number} bottles of beer.
Take one down and pass it around, ${number-1} bottles of beer on the wall.`;
    return result;
}

function printLast(number) {
    let result = [];
    if (number === 1) {
        result = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`;
    }
    else {
        result = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }
    return result;
}
*/
function main(number){
    var result = 0;
    if (number > 2){
        result = print_99_downto_3(number);
        result += `\n${printLast(number)}`;
    }
    else result = printLast(number);
    console.log(result);
    return result;
}

function print_99_downto_3(number) {
    let result = `${number} bottles of beer on the wall, ${number} bottles of beer.
Take one down and pass it around, ${number-1} bottles of beer on the wall.`
    for (let i=number-1;i>2;i--){
        result += `\n${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.`;
    }
    return result;
}

function printLast(number) {
    let result = 0;
    if(number > 1){
        result = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.`;
        result += `\n1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`;
        result += `\nNo more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }
    else if (number > 0){
        result = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`;
        result += `\nNo more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }
    else result = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    return result;
}
main(2);


