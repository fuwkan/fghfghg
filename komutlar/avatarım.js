const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`**[PNG]**     **[JPG]**     **[BMP]**`)
.setImage(`${message.author.avatarURL} `)
.setColor("RANDOM"));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['avatar', 'skin', 'template', 'walpaper', 'resim', 'profilresmim', 'fotom', 'kullanıcıfotom'],
 permLevel: 0
};

exports.help = {
 name: 'avatarım',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
