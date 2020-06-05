const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var rol = message.guild.roles.find(e => e.name === "Susturulmuş");
    var kisi = message.mentions.members.first()

    kisi.removeRole(rol)
    
    await kisi.removeRole(rol)
    message.channel.send(`Başarıyla ${kisi.username} Kişisinin Susturmasını Kaldırdım :white_check_mark:`)
} 

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['sustur-kaldır'],
 permLevel: 0
};

exports.help = {
 name: 'sustur-aç',
 description: '',
 usage: ''
};