const { Client } = require('whatsapp-web.js');
var qrcode = require('qrcode-terminal');
 
const client = new Client();
 
client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
});
 
 
client.on('qr', (qr) => {
        console.log('QR RECEIVED', qr);
 
    qrcode.generate(qr, {small: true}, function (qrcode) {
            console.log(qrcode)
    });
 
});
 
client.on('ready', () => {
    console.log('Client is ready!');
});
 
client.on('message', msg => {
        if (msg.body == '!ping') {
            msg.reply('pong');
        }
    
    if (msg.body.toLocaleLowerCase() == "selamat pagi") {
        client.sendMessage(msg.from, 'selamat pagi juga');
    }

 
});
 
client.initialize();