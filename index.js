// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('variable a is type of array? ' + (a instanceof Array));
console.log('variable b is type of array? ' + (b instanceof Array));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var x = 0; x < a.length; x++){
    a[x] = a[x] * 2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join(','));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(var x = 0;x<a.length;x++){
    var pointer = x;
    for(var y = x+1;y<a.length;y++){
        if(a[pointer] < a[y]){
            pointer = y;
        }
    }
    var tmpData = a[x];
    a[x] = a[pointer];
    a[pointer] = tmpData;

}
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var count = 0;
var currentCount = 0;
var element = "";
for(var x = 0; x<a.length;x++){
    for(var i = 0; i<a.length;i++){   
        if(a[x] == a[i]){
            currentCount++;
        }
    }
    if(currentCount > count){
        element = a[x];
        count = currentCount;
    }
    currentCount = 0;
}
console.log(element);
