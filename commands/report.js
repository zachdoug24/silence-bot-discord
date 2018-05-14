exports.run = (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#F5B041")
        .addField("Reported User", `${rUser}`, true)
        .addField("Reported UserID", `${rUser.id}`, true)
        .addField("Reported By", `${message.author}`)
        .addField("Channel", message.channel, true)
        .addField("Timestamp", message.createdAt, true)
        .addField("Reason", reason);

        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);

        return;
}