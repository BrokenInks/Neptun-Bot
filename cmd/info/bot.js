const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'bot',
    execute(message, args, client) {
        const baskEmbed = new Discord.MessageEmbed()
            .setColor('#DAF7A6')
            .setTitle(`About the bot`)
            .setDescription(`Main:\n• Servers: ${client.guilds.cache.size}\n• Members: ${client.users.cache.size}\n`)
            .setURL('')
            .setAuthor(message.author.username, message.author.avatarURL(), 'https://discord.js.org/%27')
            .setTimestamp()
            .setFooter('for '+message.author.username, message.author.avatarURL)
        message.channel.send(baskEmbed);
    }}
