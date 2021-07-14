const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════liyababy═════╗*\n           \n*✨️═LiyaMol═✨️*\n\n*owner saidali - http://Wa.me/+918606759500*\n  \n*🔰instagram:-https://www.instagram.com/pavm_n_a_n*            \n*╚══════❤❤❤═════╝*\n\n```▷Creator: saidali```"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```bgm LiyaMol botz```    \n*✨️═LiyaMol Owner saidali═✨️*\n\n*💘https://github.com/saidalisaid2/Liyamol*\n     \n*💓pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Liya baby😎═════╗*\n           \n*✨️═LiyaMol═✨️*\n\n*owner saidali - http://Wa.me/+918606759500*\n* *\n🔰instagram:-https://www.instagram.com/pavam_n_a_n?r=nametag*            *\n*╚═════❤❤❤═════╝*\n\n*▷Creator: saidali*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```bgm LiyaMol botz```    \n*💥═LiyaMol owner saidali═💥*\n\n*💘https://github.com/saidalisaid2/Liyamol*\n*     *\n💓Pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    \n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
