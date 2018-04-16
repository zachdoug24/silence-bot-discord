// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'newcomers');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  console.log(123);
  // Send the message, mentioning the member
  const embed = {
  "description": "**Welcome to the server!**",
  "color": 4960873,
  "footer": {
    "icon_url": member.user.displayAvatarURL,
    "text": "${member.user.username} has joined the server!"
  }
};
channel.send({ embed });
});


client.login(process.env.BOT_TOKEN);
