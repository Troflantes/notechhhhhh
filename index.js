const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "n!";
let owner = "430011871555223553";

bot.on("ready", () => {
    bot.user.setStatus('online');
    bot.user.setGame(`${prefix}yardım | ${bot.guilds.size} Sunucu ${bot.users.size} Kullanıcı`, "https://www.twitch.tv/scarew0");
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

bot.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('n!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Sebebini yazmalısın!').then(() => {
          message.reply(`Sunucudan atma başarılı! ${user.tag}`);
        }).catch(err => {
          message.reply('Bu kişi atılamıyor.');
          console.error(err);
        });
      } else {
        message.reply('Kullanıcı sunucuda değil.');
      }
    } else {
      message.reply('Atacağım kişiyi belirtmelisin!');
    }
  }
});

    
bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("Aleyküm Selam HoşGeldin. ")
    }
    
    if (message.content.toLowerCase() === prefix + "bot-davet") {
        message.author.send("Davet linkim: **https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot**")    
    }
    
    if (message.content.toLowerCase() === "notech") {
        message.reply("Efendim?")
    }
    
    if (message.content.toLowerCase() === prefix + "ping") {
        message.reply("Pingim ölçülüyor..");
        .then(nmessage => nmessage.edit("Pingim :ping_pong: " + bot.ping + " Milisaniye"));
    }
    
    if (message.content.toLowerCase() === prefix + 'yenile') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Yeniden başlıyorum..`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      process.exit(0);
    })
   }
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
**YARDIM**
\`\`\`fix
${prefix}yardım 1 - Bilgi Komutları
${prefix}yardım 2 - Eğlence Komutları
${prefix}yardım 3 - Moderasyon Komutları
\`\`\` `)
    }
    
     if (message.content === prefix + "yardım 1") {
        message.author.send(stripIndents`
\`\`\`fix
${prefix}ping - Botun pingini ölçer.
${prefix}yenile - Botu yeniden başlatır.
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
${prefix}bot-davet - Botun davet linkini atar.
\`\`\` `)
    }

     if (message.content === prefix + "yardım 2") {
        message.author.send(stripIndents`
\`\`\`fix
${prefix}avatarım - Avatarınızın linkini gönderir.
${prefix}kurabiye - Size kurabiye verir.
\`\`\` `)
    }
    
     if (message.content === prefix + "yardım 3") {
        message.author.send(stripIndents`
\`\`\`fix
${prefix}kick - Sunucudan atar
\`\`\` `)
    }
    

});

bot.on("message", message => {

    const kufur = ["amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("Küfür Etme! :rage:")
        message.delete()
    }
});
