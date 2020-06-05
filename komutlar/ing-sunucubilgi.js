const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  let guild = message.guild;
  let icon = message.guild.iconURL;

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`**Sunucu İstatistikleri**`)
  .setColor("GREEN")
  .setThumbnail(icon)
  .addField('📇Server Name', guild.name, true)
  .addField('🆔Server ID', guild.id, true)
  .addField('👑Server Owner', `${guild.owner.user.tag}`, true)
  .addField('📅Date Of Formatio', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('🎯Area', guild.region.toUpperCase(), true)
  .addField('🧿Total User:', guild.memberCount, true)
  .addField('🤖Bots:', bots, true)
  .addField('👥Users:', humans, true)
  .addField('🔐Security Level', guild.verificationLevel, true)
  .addField('📜writing channels', textChannels, true)
  .addField('🎤audio channels', voiceChannels, true)
  .addField(`🎉Roles`, `${guild.roles.size}`, true)
  .addField(`📿Emoticons`, `${guild.emojis.size}`, true)

  return message.channel.send(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server', 'server-information', 'sinformation'],
  permLevel: 0
};

exports.help = {
  name: 'serverinformation',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
