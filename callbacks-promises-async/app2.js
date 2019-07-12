var weather = true;
var date    = new Promise(function(resolve, reject) {
  if (weather) {
    var dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };
   resolve(dateDetails);
  }
  else {
    reject("Bad weather, so no Date");
  }
});

var myDate = function (){
date.
    then(function (done)
    {
        console.log('Success, You are a Ready '+ JSON.stringify(done, null, 2)); 
        console.log(done);
    })
    .catch(function (done)
    {
        console.log(done);
    });
  }

myDate();
