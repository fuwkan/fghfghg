const Discord = require('discord.js');

exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} he turned the stress wheel.!`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, the wheel of stress ${bitiş.toFixed(2)} returned in seconds.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['whell', 'wheel', 'stress'],
  permLevel: 0 
};

exports.help = {
  name: 'wheel-of-stress', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarkı'
};