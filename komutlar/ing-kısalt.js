const Discord = require('discord.js');
const shorten = require('isgd');

exports.run = (client, message, args, tools) => {
    message.delete();
    if (!args[0]) return message.channel.send(' ``` \n » Use: spkisalt <URL> <name> \n " example: spkisalt (url)) ``` ')

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Error:')) message.channel.send('**Please enter the correct URL**');

            message.channel.send(`**<${res}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Error:')) message.channel.send(`**<${res}>**`);

            message.channel.send(`**<${res}>**`);
        })
    }

};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['recude', 'recudeurl', 'url-recude', 'kisalt'],
 permLevel: 0
};

exports.help = {
 name: 'url',
 description: 'İstediğiniz URLni Kısaltır. ',
 usage: 'kısalt'
};
