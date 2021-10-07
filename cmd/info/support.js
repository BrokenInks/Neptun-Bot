const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'support',
    execute(message, args, client) {
        const baskEmbed = new Discord.MessageEmbed()
            .setColor('#DAF7A6')
            .setTitle('')
            .setDescription('Зайти на сервер поддержи, [Нажми сюда!](https://discord.gg/dx6nveXJ)')
            .setURL('')
            .setAuthor('')
            .setImage('')
            .setFooter('')
        message.channel.send(baskEmbed);
    }}