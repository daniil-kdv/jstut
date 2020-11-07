//      to String
//  1)
console.log(typeof(String(12.39)));
//  2) Если что-то сложить со String, то получится String
console.log(typeof("q" + 5));

//      to Number
//  1)
console.log(typeof(Number('123')));
//  2) Поставив перед любым типом данных + мы превращаем его в число
console.log((5 + +'3'));
//  3)
console.log(typeof(parseInt('15px', 10)));
console.log(+"false");