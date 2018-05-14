const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#F5B041")
        .addField("Infraction Type", ":warning: Report", false)
        .addField("Reported User", `${rUser} (UID: ${rUser.id})`, true)
        .addField("Reported By", `${message.author}`, true)
        .addField("Channel", message.channel, true)
        .addField("Timestamp", message.createdAt, true)
        .addField("Reason", reason, false);

        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);

        return;
}

module.exports.help = {
    name: "report"
}