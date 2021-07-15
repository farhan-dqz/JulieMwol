const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════👰Paathu👰═════╗*\n           \n*⚜═Paathu═⚜*\n\n*owner Fasil - http://Wa.me/+918136831431*\n* *\n🔰instagram:- https://instagram.com/mefasil?utm_medium=copy_link            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: FASIL*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Paathu Owner Fasil═💥*\n\n*💘 https://github.com/Fasil-vkn/Paathu*\n*     *\n💓Paathu═Owner Fasil═*\n\n*⚜https://github.com/Fasil-vkn/Paathu*   "

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════👰Paathu👰═════╗*\n           \n*⚜═Paathu═⚜*\n\n*owner Muhammed-Fasil - http://Wa.me/+918136831431*\n* *\n            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Muhammed-Fasil*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Paathu Owner Muhammed Fasil═💥*\n\n*💘 https://github.com/Fasil-vkn/Paathu*\n*     *\n💓Paathu👰═Owner FASIL═*\n\n*⚜https://github.com/Fasil-vkn/Paathu*   

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
