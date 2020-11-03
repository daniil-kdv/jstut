'use strict';

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = true;
options.colors = {
    box: "yellow",
    footer: "black"
};

delete options.bool;

for(let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options.colors));

let arr = [];
arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push('5');
arr.shift();
arr.unshift('1');
console.log(arr);


arr.forEach(function(item,i){
    console.log(item + ' - ' + i);
});

let ans = prompt("Введите купленный товар:","Через запятую (!)");

let array = [];

array = ans.split(",");
console.log(array);