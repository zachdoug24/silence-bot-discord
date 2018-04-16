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
  "title": "Welcome to the Asylum",
  "description": "Please be sure you check out the <#434919397086330883> channel for everything you need to know about your stay here.",
  "color": 5221730,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Created with Silence"
  },
  "author": {
    "name": member + " has joined.",
    "icon_url": member.user.displayAvatarURL
  }
};
channel.send({ embed });
});


client.login(process.env.BOT_TOKEN);
