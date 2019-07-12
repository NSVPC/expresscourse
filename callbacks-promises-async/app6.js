console.log('person1: show ticket');
console.log('person2: show ticket');

var p4 = async function()
{
    return '2019 is great begining';
}
console.log(p4());
p4().then(function(value)
{
    console.log(value);  
});

p4().catch(function(value)
{
    console.log(`End of Era!.. ${value}`);
});