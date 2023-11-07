// For Genrating QRCode
const QRCode = require('qrcode');
// For Reading QRCode
const jimp = require('jimp');
const qrCodeReader = require('qrcode-reader');
const fs = require('fs');
const { PassThrough } = require('stream');

// For Genrating QRCode ***********************************
// QRCode.toFile('./file.png', "This is Dark Joker", { errorCorrectionLevel: 'H'}, function(err){
//     if (err) throw err;
//     console.log('qrCode saved');
// })


// Genrates an SVG File (QRCode)
// QRCode.toString('Hello World', { errorCorrectionLevel: 'H', type: 'svg'}, function(err, data){
//     if(err) throw err;
//     console.log(data)
// })


// For Reading QRCode  ***********************************

const buffer = fs.readFileSync('./MYCode.png');

jimp.read(buffer, function (err, image) {
    if (err) throw err;

    const qrCodeReaderInstance = new qrCodeReader();

    qrCodeReaderInstance.callback = function (err, value) {

        if (err) { console.log(err) };
        console.log(value.result);
    }
   
    qrCodeReaderInstance.decode(image.bitmap)
   

})