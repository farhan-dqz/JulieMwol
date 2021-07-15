const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');
const Sr = "Search on Google."

if (CON.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'search ?(.*)', fromMe: true, desc: Sr}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'```entha monoose vendath```', MessageType.text);
 
    Sea.google(`${match[1]}`).then(async(result) => {
        
        await message.client.sendMessage(message.jid,result[0], MessageType.text);
      });
}));
}

else if (CON.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'search ?(.*)', fromMe: false, desc: Sr}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,'```entha monoose vendath```', MessageType.text);
 
    Sea.google(`${match[1]}`).then(async(result) => {
        
        await message.client.sendMessage(message.jid,result[0], MessageType.text);
      });
}));
}
