exports.run = (client, message, args) => {
    let price = args[0]
    let cur = args[1]
    let description = args.slice(2).join(" ")
    message.delete();
    const embed = {
      "color": 13632027,
      "author": {
        "name": client.user.username + " knows someone that wants to sell something.",
        "icon_url": client.user.avatarURL
      },
      "timestamp": new Date(),
      "footer": {
        "text": message.author.username,
        "icon_url": message.author.displayAvatarURL
      },
      "fields": [
        {
          "name": "Wanting to Sell",
          "value": description
        },
        {
          "name": "Selling Price",
          "value": price + " " + cur,
          "inline": true
        },
        {
          "name": "Contact User",
          "value": message.author.tag,
          "inline": true
        }
      ]
      
    };
    message.channel.send({ embed });
  }