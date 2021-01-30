let jsdom = require('jsdom').JSDOM,

uri = 'C:/Users/queenbeev/dev/bryan-university/fsw110/week4/calculatorJS/calculator.html',
options= {
    resources:"usable"
};

jsdom.fromFile(uri, options).then(function (dom){

        let window = dom.window
        document = window.document;

        console.log(document.querySelector("h1").innerHTML);

























































}).catch(function(e){
    console.log(e);

});