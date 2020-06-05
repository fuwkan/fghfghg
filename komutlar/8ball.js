const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "neden olmasın",
	"olabilir",
	"olmaz",
	"anlamadım",
	"valla neden olmasın",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: sp8ball <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sor', 'soru', 'cevapver', 'cevapla', 'söle', 'sölebot', 'cevabıver', 'botcuk'],
  permLevel: 0 
};

exports.help = {
  name: '8ball433231444', 
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: '8ball <soru>'
};