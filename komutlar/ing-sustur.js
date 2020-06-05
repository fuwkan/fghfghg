const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var rol = message.guild.roles.find(e => e.name === "muted");
    var kisi = message.mentions.members.first()
    if(message.member.roles.has(rol)) return message.channel.send("This person has already been silenced trying to silence again.!");
    if(!rol){
        rol = await message.guild.createRole({
        name: "muted",
        color: "DEFAULT" 
        })
    }

    message.guild.channels.forEach((channel, id) => {
         channel.overwritePermissions(rol, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false
            });
          });
   
   kisi.addRole(rol)
    
    await kisi.addRole(rol)
    message.channel.send(`Successful ${kisi.username}  I have silenced the contact :white_check_mark:`)
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mute', 'muted'],
 permLevel: 0 
};

exports.help = {
 name: 'mute',
 description: '',
 usage: ''
};  