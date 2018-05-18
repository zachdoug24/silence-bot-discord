const Discord = require("discord.js");
const colors = require("../colors.json")

let totalSeconds = (bot.user.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

module.exports.run = (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("Bot Information")
    .setDescription("Information about Shinigami.")
    .setColor(`${colors.pink}`)
    .setThumbnail(bicon)
    .addField("Uptime", `${uptime}`, true)
    .addField("Ping", `${bot.user.ping}`, true)
    .addField("Bot Name", `${bot.user.username}`, true)
    .addField("Bot ID", `${bot.user.id}`, true)
    .addField("Users Serving", `${bot.user.users}`, true)
    .addField("Servers Connected", `${bot.user.servers}`, true)
    .addField("Channels Stalking", `${bot.user.channels}`, true)
    .addField("Creator", "Deus Corvi#1225", true)
    .addField("Prefix", ";", true)
    .addField("Bot Server", "https://discord.io/silence", true)

    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}