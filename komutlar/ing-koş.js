const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('** Entertainment Commands Cannot Be Used In Private Messages!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Kos Is Weak You Run Lan.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.tenor.com/images/67d019794cfe0eafdb86a57daac3acf2/tenor.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['go', 'run-run', 'runs'],
  permLevel: 0
};

exports.help = {
  name: 'run',
  description: 'Koşarsınız.',
  usage: 'koş'
};
