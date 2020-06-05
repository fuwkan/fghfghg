const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Yardım Menü =
[1] speğlencekomutları  :: Eğlence Komutlarını Atar
[2] spkullanıcıkomutları:: Kullanıcı Komutlarını Atar. 
[3] spyetkilikomutları  :: Yetkili Komutlarını Atar
[4] spfotoefektleri     :: Fotonuza Efektler Ekler
[5] spsiteler           :: Siteler
[6] spözelchat          :: ÖzelChat Siteleri
[7] spdavet             :: Bot Davet
Kurucu : Kakaooo78
---------------------------------------------------
[8]Ping                 :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y', 'menü', 'komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
