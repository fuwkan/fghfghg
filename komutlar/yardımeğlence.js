const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Eğlence Menü =
• spseviye          :: Bedava Seviyeh
• spsor          :: Bana Soru Sormanın Vakti Geldi
• spavatarım     :: Avatarını Görmek İstermisin ?   
• spemojiyazı    :: Emojili Yazı Yazarsın ! 
• spkahkaha      :: Kahkaha Atarsın ZUHAHA
• spçayısmarla   :: Herkeze Çay Ismarlarsınız.
• spkingsman     :: Kingsman in Gücü Aşkınaaa.
• spkoş          :: GO GO GO !!
• spslots        :: Kazanda Görelim
• spstresçarkı   :: Beni Geçemezsin !
• spyaz          :: Elalemi Trollemenin Zamanı Geldi
• spyazıtura     :: Yazı mı ? Tura mı ? ÖHÜM ÖHÜM
• spçekiç        :: Thor Olmanın Vakti Geldi !
• spşanslısayım  :: Şansın Varsa 101 Çıkar .
• Ping           :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ek', 'ekomutları', 'eğlence', 'eğlence Komutları'],
  permLevel: 0
};

exports.help = {
  name: 'eğlencekomutları',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
