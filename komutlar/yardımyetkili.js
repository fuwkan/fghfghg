const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Yetkili Menü =
• spduyuru       :: Duyuru Atarsınız   
• spkilit        :: Kanalı Kilitlersiniz 
• spoylama       :: Oylama Yap !!
• sptemizle      :: CHAT I Temizler
• spsustur/aç    :: Spawn Yapanın İşini Bitir
• spsunucupanel  :: SunucuPaneli Kurar
• spsunucukur    :: Sunucu Kurar
• spsil sayı     :: Sunucuda Yazı Siler 
• Ping           :: ${client.ping}`);
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
