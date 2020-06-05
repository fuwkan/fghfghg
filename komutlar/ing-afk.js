const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args) => {
  
      
      let sebep = args.slice(0).join(" ");
      if (!sebep) return message.reply(`You have to give me a reason to be AFK!`);

      db.set(`afks_${message.author.id}`, sebep)
          message.reply(`You're in AFK mode now because of **${sebep}**!`)

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz! Etiketlendiğinizde bot AFK olduğunuzu söyler.',
  usage: 'afk <sebep>'
};