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
    // Send user's ping to the same channel
    message.channel.sendMessage('Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms.`');
  }
});


// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'join-leave');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  console.log('We are ready to alert new members of their insanity!');
  // Send the message, mentioning the member
  
  const embed = {
  "description": "Dear <@" + member.name + ">, please be sure you check out the <#434919397086330883> channel for everything you need to know about your stay here.",
  "color": 5296491,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/161331492730044416/58457f95610d97c47c380842b2c00fc4.png",
    "text": "Created with Silence"
  },
  "author": {
    "name": member.displayName + " has joined.",
    "icon_url": member.user.displayAvatarURL
  }
};
channel.send({ embed });
});


// Create an event listener for guild members leaving.
client.on('guildMemberRemove', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'join-leave');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  
  const embed = {
   "description": "We're sad to see you going...",
   "color": 14700624,
   "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/161331492730044416/58457f95610d97c47c380842b2c00fc4.png",
    "text": "Created with Silence"
  },
  "author": {
    "name": member.displayName + " has left.",
    "icon_url": member.user.displayAvatarURL
  }
};
channel.send({ embed });
});


client.login(process.env.BOT_TOKEN);
