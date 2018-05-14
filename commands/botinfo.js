const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#FF97C4")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username, true)
    .addField("Bot ID", bot.user.id, true)
    .addField("Bot Owner", "Deus Corvi#1225", true)
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}