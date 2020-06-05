const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents

exports.run = function(client, message, args) {
    var soru = args.join(' ');
    
    if(!soru) return message.reply('Specify a process. ** Correct usage**: sphesappla <process>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Incorrect Operation: **' + err)
        }

        const embed = new Discord.RichEmbed()
        .addField('Question', soru)
        .addField('Answered', cevap)

        message.channel.send(embed)
    }
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['collect', 'take', 'process'],
  permLevel: 0 
};

exports.help = {
  name: 'calculate', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};
