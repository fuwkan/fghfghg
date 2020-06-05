const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Authority Menu =
• spannounce       :: You Make An Announcement
• splock           :: Channel Locked
• spoylama         :: do vote dene bakalım
• spclear          :: message clear | chat clear
• spmute/unmute    :: mute open / mute-open
• Ping             :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yk', 'yetkili-komutları', 'yetkili', 'yetkili-menüsü'],
  permLevel: 0
};

exports.help = {
  name: 'yetkilikomutları',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
