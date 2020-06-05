const Discord = require('discord.js')

exports.run = async (client, message) => {
if (message.guild.id !== '491947634928648193') return;

let jsrole = message.guild.roles.get('540876269345308702')

if (message.member.roles.has(jsrole.id)) return message.channel.send(":x: | Zaten Bu Roldesiniz")

  message.guild.members.get(message.author.id).addRole(jsrole)
  message.channel.send (':white_check_mark: | Başarıyla 2. Adıma Geçtiniz . Özelden Gelen Kodu Güvenlik e Yazmanız Yeterli.')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtol','kayit'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'JavaScript Rolü alırsın',
  usage: 'js'
};