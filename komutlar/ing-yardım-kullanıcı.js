const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] User Menu =
• spafk          :: You will AFK be   
• spafk-exit     :: AFK Mode Leave  
• spfortnite     :: Fortnite User Profile throws
• spcalculate    :: You make the transaction
• spurl          :: Short Link
• spuser         :: assign user information
• spping         :: Yaz Bakam
• spserver       :: Assing Server İnformation
• sppassword     :: One-time password
• Ping           :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uk', 'user-commands', 'useer', 'user-menu'],
  permLevel: 0
};

exports.help = {
  name: 'usercommands',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
