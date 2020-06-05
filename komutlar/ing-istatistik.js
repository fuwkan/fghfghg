const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [day], H [hour], m [minute], s [second]");
  msg.channel.sendCode("asciidoc", `= SavaşçıBOT İstatistikler =
• Memory usage       :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Operating Time     :: ${duration}
• Users              :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Servers            :: ${client.guilds.size.toLocaleString()}
• Channels           :: ${client.channels.size.toLocaleString()}
• Discord.JS version :: v${Discord.version}
• Ping               :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot status', 'I', 'bi', 'statistics', 'usage', 'botdurum', 'BD', 'statistical'],
  permLevel: 0
};

exports.help = {
  name: 'statistics',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
