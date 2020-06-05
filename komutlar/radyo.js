const Discord = require("discord.js");
const bot = new Discord.Client();
const ffmpeg = require("ffmpeg");


  //Müzik//
var fenomen = "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio";
var metro   = "http://17773.live.streamtheworld.com/METRO_FM_SC";
var number1 = "http://nr1digitalsc.radyotvonline.com/stream/264/";
var power   = "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio";
var slowtr  = "https://radyo.dogannet.tv/slowturk";
var joyturk = "http://17733.live.streamtheworld.com/JOY_TURK_SC";
var turku = "http://radyo.turkuradyo.net:4591/;";
var turkrock = "http://radyo.dogannet.tv/turkrock";
var remix = "http://radyoremix.canliyayinda.com:8304/;";
var altınşarkılar = "http://37.247.98.8/stream/25/";
var çorlutempo = "http://37.247.98.8/stream/25/";

//ULUSAL TV KANALLARI//
var trt1 = "http://trtcanlifm-lh.akamaihd.net/i/RADYO1_1@182345/master.m3u8";
var trthaber = "http://trtcanlifm-lh.akamaihd.net/i/TRTRADYOHABER_1@182147/master.m3u8 ";
var ahaber = "http://trkvz-radyo.ercdn.net/ahaberradyo/playlist.m3u8";
var aspor = "http://trkvz-radyo.ercdn.net/asporradyo/playlist.m3u8 ";



exports.run = function (bot, message, args) {
		let mesaj = args.slice(0).join(' ');
if(!mesaj) {
	message.reply("❌ Bir radyo kanalı seç! Doğru Kullanım: **s!radyo <kanal adı> | <bitir>** Kanal Adlarını Görüntülemek İçin s!radyo-komutları Yazınız")
}		
    if (!message.member.voiceChannel) return message.reply("❌Bir sesli kanala katılmalısın!");

		    if (mesaj === "joytürk") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(joyturk);
            return message.channel.send(":radio: **JoyTürk** FM Oynatılıyor");
        }));
        return;
    };
	
	    if (mesaj === "slowtürk") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(slowtr);
            return message.channel.send(":radio: **SlowTürk** FM Oynatılıyor");
        }));
        return;
    };
  	    if (mesaj === "ahaber") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(ahaber);
            return message.channel.send(":radio: **A Haber** FM Oynatılıyor");
        }));
        return;
    };
    	    if (mesaj === "aspor") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(aspor);
            return message.channel.send(":radio: **A Spor** FM Oynatılıyor");
        }));
        return;
    };
    // 2 Fenomen
    if (mesaj === "fenomen") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(fenomen);
            return message.channel.send(":radio: **Fenomen** FM Oynatılıyor");
        }));
        return;
    };
      // 2 Fenomen
    if (mesaj === "çorlutempo") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(çorlutempo);
            return message.channel.send(":radio: **Çorlu Tempo** FM Oynatılıyor");
        }));
        return;
    };
        if (mesaj === "trthaber") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(trthaber);
            return message.channel.send(":radio: **TRTHaber** FM Oynatılıyor");
        }));
        return;
    };
          if (mesaj === "altınşarkılar") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(altınşarkılar);
            return message.channel.send(":radio: **Altın Şarkılar** FM Oynatılıyor");
        }));
        return;
    };
          if (mesaj === "remix") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(remix);
            return message.channel.send(":radio: **Remix** FM Oynatılıyor");
        }));
        return;
    };
      if (mesaj === "trt") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(trt1);
            return message.channel.send(":radio: **TRT** FM Oynatılıyor");
        }));
        return;
    };
    // 6 Metro
    if(mesaj === "metro") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(metro);
            return message.channel.send(":radio: **Metro** FM Oynatılıyor");
        }));
        return;
    };
      // 6 Metro
    if(mesaj === "türkü") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(turku);
            return message.channel.send(":radio: **Türkü** FM Oynatılıyor");
        }));
        return;
    };

        // 6 Metro
    if(mesaj === "türkrock") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(turkrock);
            return message.channel.send(":radio: **TürkRock** FM Oynatılıyor");
        }));
        return;
    };
    // 8 Number1
    if(mesaj === "number1") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(number1);
            return message.channel.send(":radio: **Number1** FM Oynatılıyor");
        }));
        return;
    };  
    // 14
    if(mesaj === "power") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(power);
            return message.channel.send(":radio: **Power** FM Oynatılıyor");
        }));
        return;
    }
	if (mesaj === "bitir") {
							const voiceChannel = message.member.voiceChannel;

			voiceChannel.leave()
	}else {
    message.channel.send("❌ Radyonun adını doğru girdiğinize emin olun! Mevcut radyolar hakkında bilgi için **bize ulaşa**bilirsin.  ^^")
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "radyo",
    description: "Belirtilen Radyo istasyonunu bulunduğu kanalda paylaşır.",
    usage: "radyo <name>"
};