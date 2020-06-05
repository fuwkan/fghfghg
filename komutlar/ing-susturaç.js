const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var rol = message.guild.roles.find(e => e.name === "muted");
    var kisi = message.mentions.members.first()

    kisi.removeRole(rol)
    
    await kisi.removeRole(rol)
    message.channel.send(`Successful ${kisi.username} I have removed the person's silencing :white_check_mark:`)
} 

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['muteopen','mutedopen','muted-open', 'unmute'],
 permLevel: 0
};

exports.help = {
 name: 'mute-open',
 description: '',
 usage: ''
};