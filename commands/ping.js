exports.run = (client, message, args) => {
    message.channel.sendMessage('Your have a ping of `' + `${Date.now() - message.createdTimestamp}` + ' ms`.');
}
