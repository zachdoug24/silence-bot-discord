exports.run = (client, message, args) => {
    let have = args[0]
    let cur1 = args[1]
    let want = args[2]
    let cur2 = args[3]
    message.delete();
    const embed = {
      "color": 16101441,
      "author": {
        "name": client.user.username + " knows someone that wants to exchange currency.",
        "icon_url": client.user.avatarURL
      },
      "timestamp": new Date(),
      "footer": {
        "text": message.author.username,
        "icon_url": message.author.displayAvatarURL
      },
      "fields": [
        {
          "name": "Currency Held",
          "value": have + " " + cur1,
          "inline": true
        },
        {
          "name": "Currency Wanted",
          "value": want + " " + cur2,
          "inline": true
        },
        {
          "name": "Contact User",
          "value": message.author.tag
        }
      ]
      
    };
    message.channel.send({ embed });
  }