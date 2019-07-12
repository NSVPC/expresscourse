console.log('person1: show ticket');
console.log('person2: show ticket');

var p1 = new Promise(function(resolve,reject)
{
    setTimeout(resolve('person3: show ticket'),3000);
});

p1.then(function(val)
{
    console.log(val);
});

console.log('person4: show ticket');
console.log('person5: show ticket');