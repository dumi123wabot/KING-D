const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'k', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'd', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/7kfyq6H/IMG-20210803-WA0650.jpg";
    r_text[1] = "https://i.ibb.co/7kfyq6H/IMG-20210803-WA0650.png";
    r_text[2] = "https://i.ibb.co/7kfyq6H/IMG-20210803-WA0650.png";
    r_text[3] = "https://i.ibb.co/7kfyq6H/IMG-20210803-WA0650.png";
    r_text[4] = "https://i.ibb.co/7kfyq6H/IMG-20210803-WA0650.png";
    r_text[5] = "https://i.ibb.co/7kfyq6H/IMG-20210803-WA0650.png";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💮D GANGS💮━━━━━⛦
●▬▬ 🔰*KING D WHATSAPP BOT*🔰 ▬▬●
■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .song <පෙළow>
🍙𝙐𝙨𝙚➜ ඔබ වෙනුවෙන් ගීතය බාගත කරයි..
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .video <yt link>
🍙𝙐𝙨𝙚➜ යූ ටියුබ් සබැඳියෙන් වීඩියෝ බාගන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .profinsta<පරිශීලක නාමය>
🍙𝙐𝙨𝙚➜ පුද්ගලයාගේ පැතිකඩෙහි දැක්ව පෙන්වයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .insta <link>
🍙𝙐𝙨𝙚➜   Instagram වෙතින් අන්තර්ගතය බාගන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .yt<text>
🍙𝙐𝙨𝙚➜   ඔබට yt සබැඳි ලබා දෙයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .show <පෙන්වන්න නම>
🍙𝙐𝙨𝙚➜   රූපවාහිනී කතා මාලාව හා සංදර්ශන සම්බන්ධ තොරතුරු ලබා ගන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gif 
🍙𝙐𝙨𝙚➜ වීඩියෝව gif බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .tomp3 
🍙𝙐𝙨𝙚➜ වීඩියෝව ශ්රව්ය උපකරණ බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .say <පෙළ>
🍙𝙐𝙨𝙚➜ පෙළ හ voice බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .img <පෙළ>
🍙𝙐𝙨𝙚➜ එය ගූගල් වෙතින් රූපය යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trt <language code>
🍙𝙐𝙨𝙚➜ ඔබ ටැග් කරන පා text ය පරිවර්තනය කරන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wiki <පෙළ>
🍙𝙐𝙨𝙚➜ එය විකිපීඩියාවේ ප්රති .ලය යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .lyric <පෙළ>
🍙𝙐𝙨𝙚➜  ගීතයේ පද රචනා සොයා ගනී.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .covid <රටේ කේතය>
🍙𝙐𝙨𝙚➜ ඔබේ රටේ COVID සංඛ්යාලේඛන යවන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .weather <නගරය>
🍙𝙐𝙨𝙚➜ ඔබේ ස්ථානයේ කාලගුණය ගැන ඔබට කියයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .removebg 
🍙𝙐𝙨𝙚➜ රූපයේ පසුබිම ඉවත් කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ocr
🍙𝙐𝙨𝙚➜ රූපයේ ලියා ඇති පෙළ සොයා ගනී.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wallpaper
🍙𝙐𝙨𝙚➜ එය අහඹු බිතුපත ඔබට යවයි.
■□■□■□■□■□■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .joke 
🍙𝙐𝙨𝙚➜ එය අහඹු විහිළුවක් යවයි.
 
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .meme <පෙළ>
🍙𝙐𝙨𝙚➜ Cations the image into a meme.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .quote 
🍙𝙐𝙨𝙚➜ එය අහඹු උපුටා දැක්වීමක් යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ss <වෙබ් අඩවි සබැඳිය>
🍙𝙐𝙨𝙚➜ එය වෙබ් අඩවියේ තිර රුව යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .changesay <පෙළ>
🍙𝙐𝙨𝙚➜ Text පෙළ වෙනස් කිරීමේ මතක රූපයක් බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trumpsay
🍙𝙐𝙨𝙚➜ ට්‍රම්ප්ගේ ට්වීට් එකට පෙළ පරිවර්තනය කරන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .compliment 
🍙𝙐𝙨𝙚➜ ඔබට ප්‍රශංසාවක් ලබා දෙයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .bitly <link>
🍙𝙐𝙨𝙚➜   ඔබේ සබැඳිය කෙටි කරන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .dict 
🍙𝙐𝙨𝙚➜   ශබ්ද කෝෂය [-dict en; anime]
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .zodiac <leo> 
🍙𝙐𝙨𝙚➜   ඔබේ කේන්දර සටහන ගැන ඔබට කියයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .qr <text>
🍙𝙐𝙨𝙚➜   පෙළ qr කේතයක් බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .movie 
🍙𝙐𝙨𝙚➜  චිත්‍රපටය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .anime <text>
🍙𝙐𝙨𝙚➜  සජීවිකරණය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.
■□■□■□■□■□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝
සමහර ලොගෝ වැඩ නෑ මොකද ලොගෝ දෙන site එක limit තියෙන්නේ unlimited ගන්නනම් සල්ලි  ඕන.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sticker 
🍙𝙐𝙨𝙚➜ img / gif ස්ටිකරයක් බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .photo 
🍙𝙐𝙨𝙚➜ ස්ටිකර් රූපයට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .attp <text>
🍙𝙐𝙨𝙚➜ Text පෙළ දිලිසෙන ස්ටිකරයක් බවට පරිවර්තනය කරයි.
■□■□■□■□■□■□■□■□■□■□
💢Logo  Commands💢
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .txtt
🍙𝙐𝙨𝙚➜ Logo ලාංඡන විධාන ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wolf<පෙළ>
🍙𝙐𝙨𝙚➜ වෘකයාගේ ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .light<පෙළ>
🍙𝙐𝙨𝙚➜ Light සැහැල්ලු ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ff<පෙළ> 
🍙𝙐𝙨𝙚➜ free fire ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .logo<පෙළ>
🍙𝙐𝙨𝙚➜ ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .phlogo<පෙළ>
🍙𝙐𝙨𝙚➜ ph ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .coding<පෙළ>
🍙𝙐𝙨𝙚➜ කේතීකරණ ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .breakwall<පෙළ>
🍙𝙐𝙨𝙚➜ බ්‍රේක්වෝල් ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .aveng<පෙළ>
🍙𝙐𝙨𝙚➜ aveng ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .park<පෙළ>
🍙𝙐𝙨𝙚➜ park ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .splay<පෙළ>
🍙𝙐𝙨𝙚➜ youtube silver play button ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gplay<පෙළ>
🍙𝙐𝙨𝙚➜ youtube gold play button ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .book<පෙළ>
🍙𝙐𝙨𝙚➜ පොතක නම වැටෙන ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .dropwater<පෙළ>
🍙𝙐𝙨𝙚➜ dropwater ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .bneon<පෙළ>
🍙𝙐𝙨𝙚➜ bneon ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gtext<පෙළ>
🍙𝙐𝙨𝙚➜ tiktok ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .epep<පෙළ>
🍙𝙐𝙨𝙚➜ free fire ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sandw<පෙළ>
🍙𝙐𝙨𝙚➜ මුහුදු වෙරලක ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .cl<පෙළ>
🍙𝙐𝙨𝙚➜  ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .flame<පෙළ>
🍙𝙐𝙨𝙚➜ flame ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ht<පෙළ>
🍙𝙐𝙨𝙚➜ ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .lt<පෙළ>
🍙𝙐𝙨𝙚➜light text ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .marval<පෙළ>
🍙𝙐𝙨𝙚➜ marval studio ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .silk<පෙළ>
🍙𝙐𝙨𝙚➜ silk රෙද්ද්ක නම වැටෙන ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sn<පෙළ>
🍙𝙐𝙨𝙚➜ snow ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .pubg<පෙළ>
🍙𝙐𝙨𝙚➜ pubg ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .naruto<පෙළ>
🍙𝙐𝙨𝙚➜ naruto ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .lion<පෙළ>
🍙𝙐𝙨𝙚➜ lion ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .toxic<පෙළ>
🍙𝙐𝙨𝙚➜ toxic ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wg<පෙළ>
🍙𝙐𝙨𝙚➜  ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .horror<පෙළ>
🍙𝙐𝙨𝙚➜ horror blood ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .st<පෙළ>
🍙𝙐𝙨𝙚➜ stoberry ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .space<පෙළ>
🍙𝙐𝙨𝙚➜ space ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .neonx<පෙළ>
🍙𝙐𝙨𝙚➜ neon ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .galaxy<පෙළ>
🍙𝙐𝙨𝙚➜ galaxy ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .bokeh<පෙළ>
🍙𝙐𝙨𝙚➜ bokeh ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .paper<පෙළ>
🍙𝙐𝙨𝙚➜ paper in grass ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .dneon<පෙළ>
🍙𝙐𝙨𝙚➜ dark neon ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .cc2<පෙළ>
🍙𝙐𝙨𝙚➜ cofee cup 2 ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .harry<පෙළ>
🍙𝙐𝙨𝙚➜ harry potter ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .uwo<පෙළ>
🍙𝙐𝙨𝙚➜ under woter ocean ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wood<පෙළ>
🍙𝙐𝙨𝙚➜ wood ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wood<පෙළ>
🍙𝙐𝙨𝙚➜ wood ලාංඡනය ලබා ගන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .candy<පෙළ>
🍙𝙐𝙨𝙚➜ candy ලාංඡනය ලබා ගන්න
සමහර ලොගෝ වැඩ නෑ මොකද ලොගෝ දෙන site එක limit තියෙන්නේ unlimited ගන්නනම් සල්ලි  ඕන.
┇
┇ ᵐᵒʳᵉ ˡᵒᵍᵒˢ ᶜᵒᵐᵐⁱⁿᵍ ˢᵒᵒⁿ😉
┇_______________________________
┇ try more logos type :-)
┇              *!txttoimg*
╚═══════════════════════════════
═════💢🐉White Dragon🐉💢═════
▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
`}) 

}));";
    r_text[1] = "https://telegra.ph/file/24cacd9938446a38180fd.png";
    r_text[2] = "https://telegra.ph/file/24cacd9938446a38180fd.png";
    r_text[3] = "https://telegra.ph/file/24cacd9938446a38180fd.png";
    r_text[4] = "https://telegra.ph/file/24cacd9938446a38180fd.png";
    r_text[5] = "https://telegra.ph/file/24cacd9938446a38180fd.png";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💮TEST💮━━━━━⛦
●▬▬ 🔰*KING D-C WHATSAPP BOT*🔰 ▬▬●
■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .song <පෙළow>
🍙𝙐𝙨𝙚➜ ඔබ වෙනුවෙන් ගීතය බාගත කරයි..
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .video <yt link>
🍙𝙐𝙨𝙚➜ යූ ටියුබ් සබැඳියෙන් වීඩියෝ බාගන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .profinsta<පරිශීලක නාමය>
🍙𝙐𝙨𝙚➜ පුද්ගලයාගේ පැතිකඩෙහි දැක්ව පෙන්වයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .insta <link>
🍙𝙐𝙨𝙚➜   Instagram වෙතින් අන්තර්ගතය බාගන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .yt<text>
🍙𝙐𝙨𝙚➜   ඔබට yt සබැඳි ලබා දෙයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .show <පෙන්වන්න නම>
🍙𝙐𝙨𝙚➜   රූපවාහිනී කතා මාලාව හා සංදර්ශන සම්බන්ධ තොරතුරු ලබා ගන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gif 
🍙𝙐𝙨𝙚➜ වීඩියෝව gif බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .tomp3 
🍙𝙐𝙨𝙚➜ වීඩියෝව ශ්රව්ය උපකරණ බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .say <පෙළ>
🍙𝙐𝙨𝙚➜ පෙළ හ voice බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .img <පෙළ>
🍙𝙐𝙨𝙚➜ එය ගූගල් වෙතින් රූපය යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trt <language code>
🍙𝙐𝙨𝙚➜ ඔබ ටැග් කරන පා text ය පරිවර්තනය කරන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wiki <පෙළ>
🍙𝙐𝙨𝙚➜ එය විකිපීඩියාවේ ප්රති .ලය යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .lyric <පෙළ>
🍙𝙐𝙨𝙚➜  ගීතයේ පද රචනා සොයා ගනී.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .covid <රටේ කේතය>
🍙𝙐𝙨𝙚➜ ඔබේ රටේ COVID සංඛ්යාලේඛන යවන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .weather <නගරය>
🍙𝙐𝙨𝙚➜ ඔබේ ස්ථානයේ කාලගුණය ගැන ඔබට කියයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .removebg 
🍙𝙐𝙨𝙚➜ රූපයේ පසුබිම ඉවත් කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ocr
🍙𝙐𝙨𝙚➜ රූපයේ ලියා ඇති පෙළ සොයා ගනී.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wallpaper
🍙𝙐𝙨𝙚➜ එය අහඹු බිතුපත ඔබට යවයි.
■□■□■□■□■□■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .joke 
🍙𝙐𝙨𝙚➜ එය අහඹු විහිළුවක් යවයි.
 
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .meme <පෙළ>
🍙𝙐𝙨𝙚➜ Cations the image into a meme.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .quote 
🍙𝙐𝙨𝙚➜ එය අහඹු උපුටා දැක්වීමක් යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ss <වෙබ් අඩවි සබැඳිය>
🍙𝙐𝙨𝙚➜ එය වෙබ් අඩවියේ තිර රුව යවයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .changesay <පෙළ>
🍙𝙐𝙨𝙚➜ Text පෙළ වෙනස් කිරීමේ මතක රූපයක් බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trumpsay
🍙𝙐𝙨𝙚➜ ට්‍රම්ප්ගේ ට්වීට් එකට පෙළ පරිවර්තනය කරන්න
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .compliment 
🍙𝙐𝙨𝙚➜ ඔබට ප්‍රශංසාවක් ලබා දෙයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .bitly <link>
🍙𝙐𝙨𝙚➜   ඔබේ සබැඳිය කෙටි කරන්න.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .dict 
🍙𝙐𝙨𝙚➜   ශබ්ද කෝෂය [-dict en; anime]
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .zodiac <leo> 
🍙𝙐𝙨𝙚➜   ඔබේ කේන්දර සටහන ගැන ඔබට කියයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .qr <text>
🍙𝙐𝙨𝙚➜   පෙළ qr කේතයක් බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .movie 
🍙𝙐𝙨𝙚➜  චිත්‍රපටය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .anime <text>
🍙𝙐𝙨𝙚➜  සජීවිකරණය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.
■□■□■□■□■□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝
සමහර ලොගෝ වැඩ නෑ මොකද ලොගෝ දෙන site එක limit තියෙන්නේ unlimited ගන්නනම් සල්ලි  ඕන.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sticker 
🍙𝙐𝙨𝙚➜ img / gif ස්ටිකරයක් බවට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .photo 
🍙𝙐𝙨𝙚➜ ස්ටිකර් රූපයට පරිවර්තනය කරයි.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .attp <text>
🍙𝙐𝙨𝙚➜ Text පෙළ දිලිසෙන ස්ටිකරයක් බවට පරිවර්තනය කරයි.
■□■□■□■□■□■□■□■□■□■□
💢Logo  Commands💢
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .dpack
  
🔱 Command: .skalt
🧿Description: *It Converts Text to Logo

🔱 Command: .ug
🧿Description: *It Converts Text to Logo

🔱 Command: .wicker
🧿Description: *It Converts Text to Logo

🔱 Command: *.hwf
*🧿Description: *It Converts Text to  logo

🔱 Command: .neon
🧿Description: It Converts Text to logo

🔱 Command: .nt
🧿Description: It Converts Text to Logo

🔱 Command: .gc
🧿Description: It Converts Text to Logo

🔱 Command: .dg
🧿Description: It Converts Text to Logo

🔱 Command: .chocolotcake
🧿Description: It Converts Text to Logo

🔱 Command: .rock
🧿Description: It Converts Text to Logo

🔱 Command: .lava
🧿Description: It Converts Text to Logo

🔱 Command: .yg
🧿Description: It Converts Text to logo

🔱 Command: .robot
🧿Description: It Converts Text to logo

🔱 Command: .gs
🧿Description: It Converts Text to logo

🔱 Command: .iv
🧿Description: It Converts Text to Logo

🔱 Command: .cloud
🧿Description: It Converts Text to logo

🔱 Command: .marvals
🧿Description: It Converts Text to Marval Studio logo

🔱 Command: .wolfblack
🧿Description: It Converts Text to black wolf logo

🔱 Command: .steel
🧿Description: It Converts Text to logo

🔱 Command: .cfnr
🧿Description: It Converts Text to Logo

🔱 Command: .sandwriting
🧿Description: *It  Text to Logo *

🔱 Command: .sandsb
🧿Description: It Converts Text to logo

🔱 Command: .csgo
🧿Description: It Converts Text to logo

🔱 Command: .lp
🧿Description: It Converts Text to Logo

🔱 Command: .m7l
🧿Description: It Converts Text to Logo

🔱 Command: .aov
🧿Description: It Converts Text to logo

🔱 Command: .pokemon
🧿Description: It Converts Text to logo

🔱 Command: .bevel
🧿Description: It Converts Text to Logo

🔱 Command: .smoketypography
🧿Description: It Converts Text to Logo

🔱 Command: .rainbowbg
🧿Description: It Converts Text to logo

🔱 Command: .kueultah
🧿Description: It Converts Text to logo

🔱 Command: .fur
🧿Description: It Converts Text to Logo

🔱 Command: .crispchrome
🧿Description: It Converts Text to logo

🔱 Command: .stars
🧿Description: It Converts Text to logo

🔱 Command: .underwebmatrix
🧿Description: It Converts Text to logo

🔱 Command: .underwebmatrix
🧿Description: It Converts Text to logo

🔱 Command: .lolcover2
🧿Description: It Converts Text to logo

🔱 Command: .coveroverwatch
🧿Description: It Converts Text to logo

🔱 Command: .warfacecover
🧿Description: It Converts Text to logo

KING D-C LOGO PACK


*සමහර ලොගෝ වැඩ නෑ.ඒ වරද අපේ බොට්ගේ නොවේ ලොගෝ දෙන සයිට් වල limit එක බැවින් අපිට එයට කරන්න දෙයක් නැත.
┇ ᵐᵒʳᵉ ˡᵒᵍᵒˢ ᶜᵒᵐᵐⁱⁿᵍ ˢᵒᵒⁿ😉
┇_______________________________
┇ try more logos type :-)
┇              *!dpack*
╚═══════════════════════════════
═════😎KING D-C😎═════
▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
`}) 

}));
