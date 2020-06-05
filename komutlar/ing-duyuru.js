const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('You Have To Write Something For Me To Write! :exclamation:');
  
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` He Made An Announcement.`)
    .setColor("#18BF7E")
    .setDescription(`${mesaj}`)
    .setThumbnail('http://www.zara.bel.tr/images/sayfalar/duyurular.png')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['announce', 'hear', 'message','server address'],
  permLevel: 2
};

exports.help = {
  name: 'announcements',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
