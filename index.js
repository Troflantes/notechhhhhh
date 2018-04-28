const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "n!";
let owner = "430011871555223553";

bot.on("ready", () => {
    bot.user.setActivity(prefix + "yardım | " + bot.guilds.size + " Sunucu " + bot.users.size + " Kullanıcı", { type: 'WATCHING' })
    console.log("Bağlandım!")   
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
    if (message.content.toLowerCase() === prefix + "avatarım") {
        message.reply(message.author.avatarURL);
   }
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'giris-cikis');
  if (!channel) return;
  channel.send(`Sunucuya HoşGeldin, ${member}!`);
});
    
bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("Aleyküm Selam")
    }
    
    if (message.content.toLowerCase() === prefix + "bot-davet") {
        message.reply("Davet linkim: **https://discordapp.com/oauth2/authorize?client_id=439467012062838785&permissions=8&scope=bot**")
    
    if (message.content.toLowerCase() === "notech") {
        message.reply("Efendim?")
    }
    
    if (message.content.toLowerCase() === prefix + "ping") {
        message.reply("Pingim " + bot.ping + " milisaniye");
    }
        
    if (message.content.toLowerCase() === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "bilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

    if (message.content === prefix + "yardım") {
        message.channel.sendMessage(stripIndents`
Selam, ben ${bot.user.username}! Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.
**Bilgi Komutları**
\`\`\`fix
${prefix}ping - Botun pingini ölçer.
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
${prefix}bot-davet - Botun davet linkini atar.
\`\`\`
**Eğlence Komutları**
\`\`\`fix
${prefix}avatarım - Avatarınızın linkini gönderir.
${prefix}kurabiye - Size kurabiye verir.
\`\`\` `)
    }

});

bot.on("message", message => {

    const kufur = ["amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("Küfür Etme! :rage:")
        message.delete()
    }

});
