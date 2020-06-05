const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const db = require('quick.db');
const path = require('path');
const chalk = require('chalk');
const request = require('request');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
  client.channels.get('709746835417464882').send(new Discord.RichEmbed().setAuthor("Yeni Bir DM", client.user.avatarURL).setFooter(message.author.tag, message.author.avatarURL).setDescription(`**Gönderenin ID:** ${message.author.id}`).setTimestamp().addField("Mesaj", message.content).setColor("RANDOM"))
})


  
  
 
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});









client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'botdavet') {
    if (msg.channel.type !== 'dm') {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(msg.author.username, 'Özel mesajlarını kontrol et. :postbox:');
    msg.channel.sendEmbed(ozelmesajkontrol) }
      msg.author.sendMessage("Bot Davet Link: https://is.gd/T2RVPX").then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
  }
})


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'davet') {
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Davet ", "[Botdavet](https://is.gd/T2RVPX)",true)
    .addField("Destek Sunucu", "[Sunucu](https://discord.gg/2KyRAwM)",true)
    .addField("Website Linki","[Website](http://lol-warp.glitch.me/)",true)
msg.channel.send(embed)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'çekiliş') {
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**Şartlar**", '**Öncelikle Botumuzu Şu Linkten Sunucunuza Eklemek = https://lnkload.com/2p3bw \n Bu Botumuzuda = http://link.tl/2136G \n Şu Siteye Giriş Yaparak Vote Vermeniz = http://link.tl/212FC \n Ve Son Olarak Şu Videoya Like Ve Yorum Atmak = https://lnkload.com/2p3bw \n \n Açıklama = Şartları Yapmazsanız Ve Linki Geçmezseniz Sistem Algılamaz. Ve Katılamazsınız \n Kazanan 5 Kişiye Özelden Ulaşılıcaktır. \n 5 Adet Bot Verilecektir. Adını Vs. Siz Ayarlayacaksınız. \n Diyer Pc lerinizde Veya Telefonlarla Yapılanlar Sayılacaktır \n 1 Cihazda 1 Kere Yapılabilir**')
msg.channel.send(embed)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'bedavabotal') {
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**BEDAVA ALMA**", 'Merhaba umarım günün iyi gidiyodur . Sana bir duyuru geçicem rahatsız ettiysem özür dilerim ! Bu sıkıcı günlerde evde yapacak birşey bulamıyorsan sana göre bir şeyim var !** SavaşSpecial AltYapısı ile kendi botunuzu hazır olarak bütün sunuculardaki kullanıcılarımıza hediye ediyorum** ! Bot tokeninizi girip kullanabilirsiniz linke tıklayıp geçerek **Kendi Botunuza Sahip Olabilirsiniz** Link : https://lnkload.com/2p6LQ **veya** **spbedavabotal**')
msg.channel.send(embed)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'freebot') {
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**FREE BOT**", 'Hello, I hope the day is going well. Im sorry to send you an announcement, Im sorry! ** With the SavaşSpecial Substructure, I present your own boat to all our users as a present **! By clicking on the link you can enter and use your bot token, ** Your Own Bottom Furnace ** Link: https://lnkload.com/2p6LQ ** or ** ** spfreebot **')
msg.channel.send(embed)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'özelchat') {
const embed = new Discord.RichEmbed()
.setColor(0x36393E)
.addField("**Toplu Sohbet**","**https://savaschat.glitch.me**")
.addField("**ÖzelChat-1**","**https://savas-ozelchat.glitch.me**")
.addField("**ÖzelChat-2**","**https://savas-ozelchat2.glitch.me**")
.addField("**ÖzelChat-3**","**https://savas-ozelchat3.glitch.me**")
.addField("**ÖzelChat-4**","**https://savas-ozelchat4.glitch.me**")
.addField("**ÖzelChat-5**","**https://savas-ozelchat5.glitch.me**")
.addField("**ÖzelChat-6**","**https://savas-ozelchat6.glitch.me**")
.addField('**Açıklama-Bilgilendirme = **', '** Bu Komut Sadece Bizde Bulunmaktadır İyi Günler. **')

msg.channel.send(embed)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'siteler') {
const embed = new Discord.RichEmbed()
.setColor(0x36393E)
.addField("**Toplu Sohbet**","**https://savaschat.glitch.me**")
.addField("**Savaş Paint**","**https://savaspaint.glitch.me/**")
.addField("**Yardım Sunucusu**","**https://discord.gg/2KyRAwM**")
.addField("**DashBoard**","**https://savasbotpanel.glitch.me/**")
.addField("**Site (Yapılacak)**","**http://lol-warp.glitch.me/**")
.addField("**Discord Bot List**","**https://discordbots.org/bot/538718409840656388**")
.addField("**Youtube**","**https://www.youtube.com/channel/UCf2cbSCSJABVsONDfreXNjw**")
.addField("**Savaş Piano**","**https://savas-piano.glitch.me/**")
.addField("**Botumuz**","**https://is.gd/T2RVPX**")
.addField('**Açıklama-Bilgilendirme = **', '** Sitelerimize Girmeyi Unutmayın **')

msg.channel.send(embed)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'webs') {
const embed = new Discord.RichEmbed()
.setColor(0x36393E)
.addField("**Chat**","**https://savaschat.glitch.me**")
.addField("**Savaş Paint**","**https://savaspaint.glitch.me/**")
.addField("**Help Server**","**https://discord.gg/2KyRAwM**")
.addField("**DashBoard**","**https://savasbotpanel.glitch.me/**")
.addField("**Webs**","**http://lol-warp.glitch.me/**")
.addField("**Discord Bot List**","**https://discordbots.org/bot/538718409840656388**")
.addField("**Youtube**","**https://www.youtube.com/channel/UCf2cbSCSJABVsONDfreXNjw**")
.addField("**Savaş Piano**","**https://savas-piano.glitch.me/**")
.addField("**I Bot**","**https://is.gd/T2RVPX**")

msg.channel.send(embed)
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'invite') {
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Invite URL", "[InviteBOT](https://is.gd/T2RVPX)",true)
    .addField("Help Server", "[Server](https://discord.gg/2KyRAwM)",true)
    .addField("Website URL","[Website](http://lol-warp.glitch.me/)",true)
msg.channel.send(embed)
  }
  });
    
  




client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


///////////////////////https://is.gd/T2RVPX



client.login(ayarlar.token);