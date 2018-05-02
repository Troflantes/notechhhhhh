const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "n!";

let prefix = "n!";
let owner = "430011871555223553";

var fortunes = [
     "Evet",
     "Hayır",
     "Belki"
];

bot.on("ready", () => {
    bot.user.setStatus('online');
    bot.user.setGame(`${prefix}yardım ✨`, "https://www.twitch.tv/scarew0");
    console.log("Bağlandım!")
});

bot.login(process.env.BOT_TOKEN);

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0x0));
   }
});

bot.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamesunucu') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime sunucu sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${bot.guilds.size} Sunucu 👀`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gametoplam') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime bütün sayılarımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${prefix}yardım ✨ | ${bot.guilds.size} Sunucu ${bot.users.size} Kullanıcı `, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamekanal') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime kanal sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${bot.channels.size} Kanal 📄`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamekullanıcı') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime kullanıcı sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${bot.users.size} Kullanıcı 💞`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gameyardım') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yardım komudunu koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${prefix}yardım ✨`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamebakım') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yardım komudunu koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`BAKIMDAYIZ`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ")

    switch (args[0].toLocaleLowerCase()) {
        case "sor":
           if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
           else message.channel.sendMessage("İlk önce soru yazmalısın!");
           break;
        case "yardım2":
           var embed = new Discord.RichEmbed()
               .addField("Komutlar", `\n${prefix} - Ping durumunu gösterir.`)
               .setColor(0x000007)
               .setThumbnail(message.author.avatarURL)
           message.channel.sendEmbed(embed);
           break;
  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});
        default:
            message.channel.sendMessage("Komut Bulunamadı!");
      }
  });

bot.on('message', async msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    await msg.react('🇹');
    msg.react('🇲');
  }
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "yaz")) {
    if (msg.channel.type !== "dm"){
    let mesaj = msg.content.substring(2 + 3);
    msg.delete (msg.content == 'yaz' + mesaj)
    let embed = new Discord.RichEmbed()
    .setColor("0x000001")
       .setDescription(mesaj)
return msg.channel.send({embed})}

    }
    });

bot.on ('message', message => {
if (message.content.toLowerCase() === prefix + 'emojiler') {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ** | ** ");
  message.channel.send(emojiList);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "havadurumu") {
    var sans = ["☁", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌩", "🌪"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Hava Durumu___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "espriyap") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Espri___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`${total}`);
  }
});

bot.on("message", message => {
    const dmchannel = bot.channels.find("name", "notechdm");
    if (message.channel.type === "dm") {
        if (message.author.id === bot.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `Yazan: ${message.author.tag}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'avatar 1') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Notech yazısını başarılı bir şekilde profilime koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setAvatar(`https://cdn.discordapp.com/attachments/438102365460234264/440961261581107210/NUTECH.png`);
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'avatar 2') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Glitch efektini başarılı bir şekilde profilime koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setAvatar(`https://cdn.discordapp.com/attachments/438102365460234264/440878633524133901/notechh.JPG`);
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'avatar 3') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Büyük yeşil yazı stilini başarılı bir şekilde profilime koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setAvatar(`https://cdn.discordapp.com/attachments/438102365460234264/441007116183011330/Adsz.png`);
    })
   }
  }
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "ping") {
msg.channel.send('Pingim ölçülüyor..')
.then(nmsg => nmsg.edit("Pingim ölçülüyor."))
.then(nmsg => nmsg.edit("Pingim :ping_pong: **" + bot.ping + "** Milisaniye"));
}
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sunucu") {
msg.author.send('Bakıyorum..')  
.then(nmsg => nmsg.edit("Buyrun: https://discord.gg/PjF4kgq"));
}
});

bot.on('message', msg => {
  if (msg.content.toLowerCase() === 'acıktım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Açlığını unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Açlığını unutursun. Güneşden gitmemeye çalış!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki çatalı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki kaşığı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bıçağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }

  if (msg.content.toLowerCase() === 'susadım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Susuzluğunu unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Susuzluğunu unutursun.');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki şişeyi yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki içeceği yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bardağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }
});

bot.on("message", message => {
    
    if (message.content.toLowerCase() === prefix + "botdavet") {
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

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)
    }

    if (message.content.toLowerCase() === prefix + "botbilgi") {
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

    if (message.content.toLowerCase() === prefix + "yardım") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}anakomutlar - Bilgi Komutları
${prefix}eğlence - Eğlence Komutları
${prefix}moderasyon - Moderasyon Komutları
${prefix}kişisel - Kişisel komutlar

          Anlık Bilgim
-> ` + bot.guilds.size + ` Sunucu 👀

->`+ bot.channels.size + ` Kanal 📄

->`+ bot.users.size + ` Kullanıcı 💞
\`\`\` `)
    }
    
    if (message.content.toLowerCase() === prefix + "matematik") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}topla - Yazdığınız iki sayıyı toplar.
${prefix}çıkar - Yazdığınız iki sayıyı çıkarır.
${prefix}çarp - Yazdığınız iki sayıyı çarpar.
${prefix}böl - Yazdığınız iki sayıyı böler.
\`\`\` `)
    }
    
     if (message.content.toLowerCase() === prefix + "anakomutlar") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}emojiler - Sunucudaki emojileri gösterir.
${prefix}ping - Botun pingini ölçer.
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}botbilgi - Bot hakkında bilgi verir.
${prefix}botdavet - Botun davet linkini atar.
${prefix}sunucu - Destek sunucusunun linkini atar.
\`\`\` `)
    }
    
     if (message.content.toLowerCase() === prefix + "kişisel") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}matematik - Matematik işlemi yapar.
${prefix}yaz - Yazdığınız mesajı bota yazdırır.
\`\`\` `)
    }

     if (message.content === prefix + "eğlence") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}havadurumu - Bot havadurumunu tahmin eder.
${prefix}espriyap - Bot espri yapar.
${prefix}zekam - Zeka puanınızı gösterir.
${prefix}matematik - Matematik işlemi yapar. 
${prefix}sigara - Bot sigara içer.
${prefix}avatarım - Avatarınızın linkini gönderir.
${prefix}kurabiye - Size kurabiye verir.
\`\`\` `)
    }
    
     if (message.content === prefix + "moderasyon") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}kick - Etiketlenen kişiyi sunucudan atar. [BAKIM]
${prefix}mute - Etiketlenen kişiyi susturur. [BAKIM]
${prefix}ban - Etiketlenen kişiyi sunucudan banlar. [BAKIM]
${prefix}temizle - 100 Adet mesaj siler. [BAKIM]
${prefix}yenile - Botu yeniden başlatır.
\`\`\` `)
    }
});
