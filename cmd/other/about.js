const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'about',
    aliases: ['bot'],
    category: 'other',
    execute(message, args, client) {
        var ping = Math.round(client.ws.ping)
        const botEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('About me')
            .setAuthor('About me:', `https://images-ext-2.discordapp.net/external/KWRhHp_4L7RVEJshbFMWHpoO_Zgp6JtzJqMGWi0N8Mw/https/cdn.discordapp.com/avatars/795011972394647562/8bd097b0978f529fc0a49c5766a564cc.webp`, 'https://discord.js.org/%27')
            .setThumbnail(`https://cdn.discordapp.com/attachments/739801798138789930/746101344376717482/images_10.jpg`)
            .addFields(
                { name: 'Name: Neptune', value: 'Name', inline: false },
                { name: 'Tag: #2439', value: 'Tag', inline: false },
                { name: 'Bot in number:', value: `Members: ${client.users.cache.size}\Servers: ${client.guilds.cache.size}`, inline: false },
            )
            .setTimestamp()
            .setFooter('For '+message.author.username, message.author.avatarURL)
        message.lineReply(botEmbed);
    },
};
