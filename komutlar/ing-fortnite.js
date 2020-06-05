const Discord = require('discord.js');
const Fortnite = require('fortnite');
const stats = new Fortnite('88205ee1-0f8c-4cc6-9f9a-0c449f3aff71')

exports.run = (client, message, args, tools) => {

    let platform;
    let username;

if (!['pc','xbl','psn'].includes(args[0])) message.channel.send('**Please select platform**: `spfortnite PC | xbl | PSN username`* *example**: `spfortnite PC Dark`');

if (!args[1]) return message.channel.send('`**Please enter user name**:` spfortnite PC | XBL | PSN username` **example**: spfortnite PC dark ');

platform = args.shift();
username = args.join(' ');

stats.getInfo(username, platform).then( data => {

    const embed = new Discord.RichEmbed()
    .setThumbnail('https://pbs.twimg.com/profile_images/966692874682118144/_9keP5sd.jpg')
    .setColor("#922DF2")
    .setTitle(`${data.username} İsimli Kullanıcının İstatistikleri`)
    .addField('» Best Place', `**Top 3:** *${data.lifetimeStats[0].value}*\n**Top 5:** *${data.lifetimeStats[1].value}*\n**Top 6:** *${data.lifetimeStats[3].value}*\n**Top 12:** *${data.lifetimeStats[4].value}*\n**Top 25:** *${data.lifetimeStats[5].value}*`, true)
    .addField('» Total Score', data.lifetimeStats[6].value, true)
    .addField('» Matches Played ', data.lifetimeStats[7].value, true)
    .addField('» Win', data.lifetimeStats[8].value, true)
    .addField('» Win Percentage', data.lifetimeStats[9].value, true)
    .addField('» Kill', data.lifetimeStats[10].value, true)
    .addField('» K/D', data.lifetimeStats[11].value, true)
    .addField('» Killing Per Minute', data.lifetimeStats[12].value, true)
    .addField('» Total Playing Time', data.lifetimeStats[13].value, true)
    .addField('» The average survival time', data.lifetimeStats[14].value, true)

    message.channel.send(embed);
})
.catch(error => {

    message.channel.send(' ⛔ User Not Found ⛔ ')
})
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['fortnite'],
 permLevel: 0
};

exports.help = {
 name: 'fortnite',
 description: 'İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.',
 usage: 'fortnite'
};
