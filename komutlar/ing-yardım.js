const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("yml", `= SavaşSpecial [SP] Help Menu =
[1] spfuncommands         :: Assigns Fun Commands.
[2] spusercommands        :: Assigns User Commands.
[3] spmodcommands         :: Assign Authorized Commands
[4] spphotoeffect         :: Adds Effects To Your Photon
[5] Ping                  :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help', 'h', 'commands'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
