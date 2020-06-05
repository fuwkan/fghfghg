const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You Do Not Have Permission To Use This Command!");
if(!args[0]) return message.channel.send("🚫 **Write Down The Amount Of Messages That Will Be Deleted!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} I deleted the message. :put_litter_in_its_place:`).then(msg => msg.delete(5000));
    const botunmesajyonet = new Discord.RichEmbed()
    let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('🌍 activity:', 'Delete Chat')
    .addField('👨 STAFF: ', message.author.username)
    .addField('🔥 Result: ', `Successful`)
    .addField('📝 How Piece', + messagecount)
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Chat " + message.member + " has been deleted by! **").then(msg => msg.delete(5000));

})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['msgclear', 'delete','deleted'],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};