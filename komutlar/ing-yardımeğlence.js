const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Fun Menu =
• spseviye        :: Look At Your Rank.
• sp8ball         :: You Ask Questions To bot
• spavatar        :: You Want To See Your Avatar ?  
• spemojifont     :: Text to emojifont
• splaughter      :: You laugh ZUHAHA
• speveryonetea   :: You Can Buy Everyone A Cup Of Tea.
• spkingsman      :: Kingsman This a Sparta !!"
• sprun           :: GO GO GO !!
• spslots         :: HARD Game !!
• spstress        :: you stress ?
• spsay           :: It's Time To Troll My Elemi
• spyazıtura      :: ready Yazı mı ? Tura mı ? ÖHÜM ÖHÜM
• spçekiç         :: Thor Olmanın Vakti Geldi !
• spşanslısayım   :: Şansın Varsa 101 Çıkar .
• Ping            :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fc', 'fun-commands', 'fun', 'funcommands'],
  permLevel: 0
};

exports.help = {
  name: 'funcommands',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
