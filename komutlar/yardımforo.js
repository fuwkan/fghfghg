const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Yetkili Menü =
• sprip          :: Fotonuza Rip Ekler  
• spavatarım     :: Fotonuzu Atar 
• spservericon   :: Sunucunun Fotosunu Atar
• sppixel        :: Avatarını Pixel Yapar
• Ping           :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fotoefektleri'],
  permLevel: 0
};

exports.help = {
  name: 'fotoefektleri',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
