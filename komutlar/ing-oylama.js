const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Enter the voting name');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('Voting')
    .setColor(3447003)
    .setDescription(`${mesaj} \n\n\ For Yes: :thumbsup: For No: :thumbsdown: `)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['voting', 'vote', 'server-voting'],
  permLevel: 2
};

exports.help = {
  name: 'voting',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};
