const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var rol = message.guild.roles.find(e => e.name === "Susturulmuş");
    var kisi = message.mentions.members.first()
    if(message.member.roles.has(rol)) return message.channel.send("Bu kişi zaten susturulmuş birdaha susturmaya çalışma!");
    if(!rol){
        rol = await message.guild.createRole({
        name: "Susturulmuş",
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
    message.channel.send(`Başarıyla ${kisi.username} Kişisini Susturdum :white_check_mark:`)
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['sustur'],
 permLevel: 0
};

exports.help = {
 name: 'sustur',
 description: '',
 usage: ''
};  