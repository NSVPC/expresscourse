var log = {
    info: function (info1)
    {
        console.log('Info: ' + info1);
    },
    warning: function (warning1) 
    { 
        console.log('Warning: ' + warning1);
    },
    error: function (error1) 
    { 
        console.log('Error: ' + error1);
    }
};
module.exports = log;
