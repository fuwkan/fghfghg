const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: you cannot use the "kick" command in private messages. :warning:')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'punishments');
  if (!modlog) return message.reply('you need to build the "punishments" channel');
  if (reason.length < 1) return message.reply('can you write what youre doing?');
  if (message.mentions.users.size < 1) return message.reply('tag who Im gonna throw').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('I cant shut down the authorities from the server.');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Discard From Server')
    .addField('Users:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authority:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
