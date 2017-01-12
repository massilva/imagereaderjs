var Tesseract = require('tesseract.js');

Tesseract.recognize(myImage)
    .then(function(result){
            console.log(result)
    })
