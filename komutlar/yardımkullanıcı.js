const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Kullanıcı Menü =
• spafk-ol       :: AFK Olursunuz.   
• spafk-çık      :: AFK Modundan Çıkarsınız   
• spfortniter    :: Fortnite Profilinizi Atar. 
• sphesapla      :: Toplamada Size Yardım Eder.
• spkısalt       :: Link Kısaltır
• spkbilgim      :: Kullanıcı Bilgisisi TATATA
• spping         :: Yaz Bakam
• spsunucubilgi  :: Sunucu Bilgisi OYEE
• spşifre        :: Tek Kullanımlık Şifre
• Ping           :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kk', 'kullanıcı-komutları', 'kullaanıcı', 'kullanıcı-menüsü'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıkomutları',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
