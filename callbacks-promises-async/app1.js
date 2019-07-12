function greeting(name)
{
    console.log(`hello ${name}, welcome to scratch`);
}

function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
    callback(fullName);
  }
  
introduction('Chris','Nwamba', greeting); 