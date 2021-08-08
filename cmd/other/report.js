const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const moment = require("moment");

module.exports = {
  name: 'report',
  aliases: ['report'],
  category: 'other',
  execute(message, args, client) {
        if(message.channel.id != "871474214270554124") return;
        var reportUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
        if(!reportUser) return message.reply(`Вы не указали пользователя!`);
        var reason = args.slice(1).join(" ");
        if(!reason) return message.reply(`Вы не указали причину!`);
        let reportchan = client.channels.cache.get(`871475430304120832`);
        const botEmbed = new Discord.MessageEmbed()
        .setTitle(`Жалоба на ${reportUser.user.tag} от ${message.author.tag}`)
        .addField(`**Информация:**`, `**Пользователь: ${message.author.tag}[\`ID: ${message.author.id}\`]\nПожаловался на: ${reportUser.user.tag}[\`ID: ${reportUser.id}\`]**`)
        .addField(`**Причина жалобы:**`, `**\`${reason}\`**`)
        .setFooter(`Desert Cave Development | Offical Bot`, bot.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTimestamp();
        message.lineReply(botEmbed);
    }
}