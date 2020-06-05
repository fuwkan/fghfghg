const Discord = require('discord.js');
const generator = require('generate-password');

exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('Set a length. ** Correct usage**: sppassword <length>')

    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['password'],
  permLevel: 0 
};

exports.help = {
  name: 'password', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};