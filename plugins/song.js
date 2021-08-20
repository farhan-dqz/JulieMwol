const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'song', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\nEda eda, mandankonappi.. Nee enne kooduthal mandan aakkatheda\n";
r_text[1] = "Pikachune tholpikkaan ningalkavilla. Jeevitathil pinkiye tholpichittundu… palarum… palavattom…😥😥 aarellum aaa sed bgm onn iduo...";
r_text[2] = "Pikachu says i love you 😘";
r_text[3] = "Pikchude yudhangal Company Kanan Povunnatheyuloo";
r_text[4] = "hi, how are you";
r_text[5] = "ennikk korch rest theroo...🥵🥵";
r_text[6] = "Pikachu - eva - simsim \ningane ethra ethra paerugal aan alle enikk..😂🤣";
r_text[7] = "താനാരാണെന്ന് തനിക്ക് അറിയാന്‍ മേലങ്കില്‍താന്‍ എന്നോട്‌ ചോദിക്ക്.. താനാരണെന്ന്...തനിക്ക് ഞാന്‍ പറഞ്ഞു തരാംതാനാരാണെന്ന്...എന്നിട്ട്‌ഞാനാരാണെന്ന് എനിക്കാറിയാമൊന്നുതാനെന്നോട്‌ ചോദിക്ക്..അപ്പോ തനിക്ക് ഞാന്‍ പറഞ്ഞു തരാംതാനാരാണെന്നും ..ഞാനാരാണെന്നും - കുതിരവട്ടം പപ്പു, മണിച്ചിത്രതാഴ് ";
r_text[8] = "\n enne vilicho...?🧐 \n";
r_text[9] = "ente per Pikachu,ninte per donkey, backi ellarum monkey😼😼";
r_text[10] = "nee vilicha enikk villi kelkathe irrikkaan pattuo";
r_text[11] = "do you know who is my creator..? its none other than saidali";
r_text[12] = "രണ്ട് ബക്കറ്റ് നിറയെ വെള്ളമുണ്ട്. അതിൽ ഒരു ബക്കറ്റിനു ദ്വാരമുള്ളതാണ്. എന്നാൽ ദ്വാരമുള്ള ബക്കറ്റിൽ നിന്നും വെള്ളം പോകുന്നില്ല. കാരണം എന്താണ്? para ninak vivaram indo nokkatte";
r_text[13] = ".song adich thangalude fav song name para pinky ath download aakki theraam";
r_text[14] = "ഹിന്ദിക്കാർ പോക്കറ്റിലും മലയാളികൾ അടുപ്പിലും വെക്കുന്ന സാധനം എന്ത്..?  ennallum ath enthaayikkum...🤔🤔";
r_text[15] = "hi.. ningal ente fan aano..?";
r_text[16] = "ivide aaro ente per villichallo.. nee aano..?";
r_text[17] = "\n hey mishter ningalude per entha..?";
r_text[18] = "enikk njan und pinky uyir";
r_text[19] = "\n eda sathyam para nee ente fan alle..\n ";
r_text[20] = "The coefficient's of linear expansions is the position of Haemoglobin in the atmosphere. But Why? Full Many gem of purests serene lay underneath the unfathomed ocean's unblossomeds ! But why? But why";
r_text[21] = "Kochi pazhaya kochiyellennariyam… pakshe pinky pazhaya pinky thanneya...😎\n\n";
r_text[22] = "Kaanaan oru look illanney ullu… bhayankara budhiya\n\n ninnak allatto enik Pikachu";
r_text[23] = "Ithalla ithinapparam chaadi kadannavananee K.K. Pikachu";
r_text[24] = "\nVarrierey… Enthado njan inganey aayi poyathu\n";
r_text[25] = "\nPempillerey roattikoodey nadakkaan nee sammathikkilla, alley?... Da, neeyaanee alavaladi Shaji alley\n";
r_text[26] = "\nAthu enne uddheshichanu… enne thanney uddheshichanu… enne maatram uddheshichanu\n";
r_text[27] = "\nBeedi undo saghave, oru theepetti edukkan\n";
r_text[28] = "\nIppo sheriyakithara… ippo sheriyakithara…\n";
r_text[29] = "\nEnne kollathirikkan pattuo? illa alley?\n";
r_text[30] = "motivate cheyaan aarkum kayyum ath cheyth kaanikkaaana paad.\n       -Pinky";
r_text[31] = "My phone number is 2255"; 
r_text[32] = "Pani varunund Avaracha";
r_text[33] = "Njan Puliyanu Ketta";
r_text[34] = "Purushu enne anugrahikanam";
r_text[35] = "Chetta Kurachu Kanjiyedkkatte";
r_text[36] = "Karnan Nepolean Bhagat Singh, Ivar moonuperumanu ente heroes";
r_text[37] = "Thante thantha alla ente thantha";
r_text[38] = "All Arealayum Aiyaa Ghilli Da";
r_text[39] = "Nee padicha school la na headmaster da";
r_text[40] = "Vazhkai Oru Vattam. Inga Jeikkaravan Thopan, Thokaravan Jeipaan";
r_text[41] = "Twinkle Twinkle Little Star";
r_text[42] = "Evulavo Panittom, Edha Panamattoma";
var i = Math.floor(43*Math.random())

await message.sendMessage(r_text[i]);

}));
