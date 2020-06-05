const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const cevirme = Math.floor(Math.random() * 2) + 1;
  
  let yeyembed = new Discord.RichEmbed()
  .setAuthor(`Çektin Silahı Kafana. ?? `)
  .setDescription(`Ve Kurtuldun Dostum.! :sweat_smile: `)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0011b2");
 
  let ohnoembed = new Discord.RichEmbed()
  .setAuthor(`Çektin Silahı Kafana. ?? `)
  .setDescription(`Ve İşin Bitti! :skull: `)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("000000");
  
  let yeyembed2 = new Discord.RichEmbed()
  .setAuthor(`Çektin Silahı Kafana. ?? `)
  .setDescription(`Ve Kurtuldun Dostum.! :sweat_smile: `)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0011b2");
 
  let ohnoembed2 = new Discord.RichEmbed()
  .setAuthor(`Çektin Silahı Kafana. ??`)
  .setDescription(`Ve İşin Bitti! :skull: `)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("000000");
  
  if (cevirme == "1")
  {
    message.channel.send(yeyembed);
  }
  if (cevirme == "2")
  {
    message.channel.send(ohnoembed);
  }
  if (cevirme == "3")
  {
    message.channel.send(yeyembed2);
  }
  if (cevirme == "4")
  {
    message.channel.send(ohnoembed2);
  }
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['rus-ruleti', 'rusrulet', 'rus ruleti'],
	permLevel: 0
}

exports.help = {
	name: 'rulet',
	description: 'Şansa Göre Ölür Ya Da Kurtulursunuz.',
	usage: 'rulet'
}