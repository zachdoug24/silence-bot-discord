const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '.rules') {
    	message.reply('{const embed = {
  "title": "title ~~(did you know you can have markdown here too?)~~",
  "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
  "url": "https://discordapp.com",
  "color": 8024343,
  "timestamp": "2018-04-15T15:47:13.280Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "footer text"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "image": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "author": {
    "name": "author name",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "fields": [
    {
      "name": "🤔",
      "value": "some of these properties have certain limits..."
    },
    {
      "name": "😱",
      "value": "try exceeding some of them!"
    },
    {
      "name": "🙄",
      "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
    },
    {
      "name": "<:thonkang:219069250692841473>",
      "value": "these last two",
      "inline": true
    },
    {
      "name": "<:thonkang:219069250692841473>",
      "value": "are inline fields",
      "inline": true
    }
  ]
};
channel.send("this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```", { embed });')
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
