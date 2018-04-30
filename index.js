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

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));
   }
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "duyuru") {
let mesaj = args.slice(0).join(' ');
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`${mesaj}`)
.setColor(0xff0000));
   }
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});

bot.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith(prefix +'kick')) {
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

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "ping") {
msg.channel.send('Pingim ölçülüyor..')
.then(nmsg => nmsg.edit("Pingim ölçülüyor."))
.then(nmsg => nmsg.edit("Pingim :ping_pong: **" + bot.ping + "** Milisaniye"));
}
});
    
bot.on("message", message => {
    
    if (message.content.toLowerCase() === prefix + "bot-davet") {
        message.author.send("Davet linkim: **https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot**")    
    }
    
    if (message.content.toLowerCase() === "notech") {
        message.reply("ne var nee")
    }
    
    if (message.content.toLowerCase() === prefix + 'yenile') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Yeniden başlıyorum..`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      process.exit(1);
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
\`\`\`fix
${prefix}anakomutlar - Bilgi Komutları
${prefix}eğlence - Eğlence Komutları
${prefix}moderasyon - Moderasyon Komutları
\`\`\` `)
    }
    
     if (message.content === prefix + "anakomutlar") {
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

     if (message.content === prefix + "eğlence") {
        message.author.send(stripIndents`
\`\`\`fix
${prefix}sigara - Bot sigara içer.
${prefix}avatarım - Avatarınızın linkini gönderir.
${prefix}kurabiye - Size kurabiye verir.
\`\`\` `)
    }
    
     if (message.content === prefix + "moderasyon") {
        message.author.send(stripIndents`
\`\`\`fix
${prefix}kick - Sunucudan atar
\`\`\` `)
    }
    

});
