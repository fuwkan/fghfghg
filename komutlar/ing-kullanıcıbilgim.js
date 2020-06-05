const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("online") : (Durum == "offline" ? ("offline") : (Durum == "idle" ? ("idle") : (Durum == "dnd" ? ("dnd") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Name:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id)
      .addField('Registration Date:', message.author.createdAt)
      .addField('Situation:', durm)
      .addField('What is playing now:', message.author.presence.game ? message.author.presence.game.name : 'He s not playing right now.')
      .addField('Boots?', message.author.bot ? '\n Yes' : 'No')
      console.log("spuser-information commands " + message.author.username + " it was used by the.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uinformation', 'userinformation', 'user-information'],
  permLevel: 0
};

exports.help = {
  name: 'user',
  description: 'Komutu kullanan kişi hakkında bilgi verir.',
  usage: 'kullanıcıbilgim'
};
