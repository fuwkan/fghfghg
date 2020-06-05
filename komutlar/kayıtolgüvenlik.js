const Discord = require('discord.js')

exports.run = async (client, message) => {
if (message.guild.id !== '491947634928648193') return;

let jsrole = message.guild.roles.get('540876269345308702')

if (message.member.roles.has(jsrole.id)) return message.channel.send(":x: | Zaten Bu Roldesiniz")

  message.guild.members.get(message.author.id).addRole(jsrole)
  message.channel.send (':white_check_mark: | Başarıyla Üye Rolünü Aldınız')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Qw45RYX', 'vl67YmXa', 'yLg78Cl', 'kKlfY62', 'ftgXMRL', 'TRKml51', '543GFV2', '3WQ2REF', 'EFRGBFD'],
  permLevel: 0
};

exports.help = {
  name: 'Qw67YLXj',
  description: 'JavaScript Rolü alırsın',
  usage: 'js'
};