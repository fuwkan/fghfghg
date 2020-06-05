const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Entertainment Commands Cannot Be Used In Private Messages!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Big Heart ' + message.author.username + 'Everyone Has Tea!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.giphy.com/media/qrOTVsvYm1JIc/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['buy-tea', 'everyones-  tea', 'everyonetea'],
  permLevel: 0
};

exports.help = {
  name: 'I il tell you what.',
  description: 'Herkese Çay Verir',
  usage: 'herkesebendençay'
};
