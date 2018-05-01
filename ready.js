const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');

var prefix = "n!";

bot.login(process.env.BOT_TOKEN);

module.exports = client => {
	snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
  .set('Authorization', api)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.');

module.exports = bot => {

    var Games = [
    `${prefix}yardım ✨ 1/3`,
    `${bot.guilds.size} Sunucu 👀 2/3`,
    `${bot.users.size} Kullanıcı 💞 3/3`
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/scarew0");
        }, 2 * 2500);

};
