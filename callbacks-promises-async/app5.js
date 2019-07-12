console.log('person1: show ticket');
console.log('person2: show ticket');

var p1 = new Promise(function(resolve,reject)
{
    setTimeout(resolve('person3: show ticket'),3000);
});

var p2 = p1.then(function(val)
{
    console.log('husband:  we should go in');
    console.log('Wife: no i am hungry');
    return new Promise(function(resolve,reject)
    {
        resolve(`${val} popcorn`);
    });
});

p2.then(function(val)
{
   console.log(val);
});

console.log('person4: show ticket');
console.log('person5: show ticket');