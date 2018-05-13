exports.run = (client, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#1F1F1F")
    .setThumbnail(bicon);
    .addField("Bot Name", bot.user.username);

    return message.channel.send(botembed)
}