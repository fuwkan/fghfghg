const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args) => {
  
      

        if(await db.fetch(`afks_${message.author.id}`)) {
                message.reply("you're out of AFK mode successfully!")
            db.delete(`afks_${message.author.id}`)

}
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk-exit', 'afk-leave', 'afkexit', 'afkleave'],
  permLevel: 0
};

exports.help = {
  name: 'AFK-exit',
  description: 'AFK olursunuz! Etiketlendiğinizde bot AFK olduğunuzu söyler.',
  usage: 'afk <sebep>'
};