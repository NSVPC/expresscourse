/*
console.log("Plant corn");
console.log("Water Plant");
console.log("Add fertilizer");
*/

//setTimeout function makes the operation asynchronous by deferring plant watering to occur after 3 seconds
console.log("Plant corn");
setTimeout(function() {
    console.log("Water Plant");
},3000);
console.log("Add fertilizer");

var list    = ['man', 'woman', 'child']
console.log(list);
// create a new array
// loop over the array and map the data to new content
var newList = list.map(function (val) {
  return val + " kind";
});
console.log(newList);


function hello(name)
{
    console.log("hello" + name);
    console.log(`hello${name}`);
}
hello(" CSS");


function hellocheck(name) {
    console.log("hello " + name);
}
hellocheck();
hellocheck(12, "HTML", "AAA", 4);