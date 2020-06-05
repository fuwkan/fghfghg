const Discord = require('discord.js');


exports.run = (client, message, params) => {
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Olamaz! Bu kodu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
            const ozelmesajuyari = new Discord.RichEmbed()
        .setDescription(`✅ **Sunucu hazırlanıyor...**`);
            message.channel.send(ozelmesajuyari)

             message.guild.createChannel("Sohbet-Muhabbet", "category").then(kategori => {

message.guild.createChannel("sohbet-muhabbet", "text").then(kanal => {
message.guild.createChannel("komut-kullanım", "text").then(kana => {
message.guild.createChannel("foto-atma", "text").then(kan => {
kanal.setParent(kategori.id)  
kana.setParent(kategori.id)  
kan.setParent(kategori.id)  

                  
        

             message.guild.createChannel("Yetkili", "category").then(kategor => {

message.guild.createChannel("yetkili-sohbet", "text").then(kanall => {
      message.guild.createChannel('Yetkili Sesli', 'voice').then(kanalll => {
kanall.setParent(kategor.id)
kanalll.setParent(kategor.id)   


              message.guild.createChannel("Bot Ayarları", "category").then(katego => {

message.guild.createChannel("sayaç", "text").then(kanhal => {
      message.guild.createChannel('giriş-çıkış', 'text').then(kahal => {
      message.guild.createChannel('otorol', 'text').then(karal => {
      message.guild.createChannel('mod-log', 'text').then(kamal => {
kanhal.setParent(katego.id)  
kahal.setParent(katego.id)  
karal.setParent(katego.id)  
kamal.setParent(katego.id) 




    
              message.guild.createChannel("Sunucu", "category").then(kateg => {

message.guild.createChannel("kurallar", "text").then(arda => {
      message.guild.createChannel('duyurular', 'text').then(musab => {
      message.guild.createChannel('partner', 'text').then(yanak => {
      message.guild.createChannel('oylamalar', 'text').then(kar => {
      message.guild.createChannel('partnerlik-şartları', 'text').then(esma => {
arda.setParent(kateg.id)
musab.setParent(kateg.id)      
yanak.setParent(kateg.id)
kar.setParent(kateg.id)
esma.setParent(kateg.id)      

        


        
             message.guild.createChannel("Sesli Sohbet-Muhabbet", "category").then(kate => {

message.guild.createChannel("Sesli Sohbet", "voice").then(max => {
        message.guild.createChannel('Müzik Sohbet', 'voice').then(warren => {
    message.guild.createChannel('Oyun Sohbet', 'voice').then(nathan => {
max.setParent(kate.id)
warren.setParent(kate.id) 
nathan.setParent(kate.id)   





        
        
    const ozelmesajuyari2 = new Discord.RichEmbed()        
        .setDescription(`✅ **Kanallar Kuruldu**`);
      message.channel.send(ozelmesajuyari2)
    const ozelmesajuyali = new Discord.RichEmbed()
       .setDescription(`**NOT: Kanalların Özel Rollerini Siz Ayarlayacaksınız, Bot Kendisi Ayarlamaz.**`)
      return message.channel.send(ozelmesajuyali)
}) }) });
}) });
}) }) });
}) }) });
             }) }) }) }) }) }) }) }) }) }) });

}
  
                                                          
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-kur','sunucukur', 'sunucukurulum'],
  permLevel: 0,
  kategori: 'yetkili'
};

exports.help = {
  name: 'sunucu-kurulum',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'sunucu-kurulum'
};