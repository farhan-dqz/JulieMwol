const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════Paathu🧚🏻‍♀️═════╗*\n           \n*✨️═Paathu═✨️*\n\n*owner fasil - http://Wa.me/+918136831431*\n  \n*🔰instagram:-https://www.instagram.com/mefasil*            \n*╚══════❤❤❤═════╝*\n\n```▷Creator: fasil```"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```Paathu bgm bot```    \n*✨️═Paathu Owner fasil═✨️*\n\n*💘https://github.com/Fasil-vkn/Paathu*\n     \n*💓pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════👰Paathu👰═════╗*\n           \n*✨️═Paathu═✨️*\n\n*owner fasil - http://Wa.me/+918136831431*\n* *\n🔰instagram:-https://www.instagram.com/mefasil*            \n*╚═════❤❤❤═════╝*\n\n*▷Creator: fasil*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```paathu bgm bot```    \n*💥═Paathu owner fasil═💥*\n\n*💘https://github.com/Fasil-vkn/Paathu*\n     \n💓Pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    \n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
