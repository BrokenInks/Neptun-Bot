const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const moment = require("moment");

module.exports = {
  name: 'kick',
  cooldown: 5,
  category: 'moderation',
  execute(message, args, client) {
        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
        if(!kickUser) return message.reply(`Вы не указали пользователя!`);
        var reason = args.slice(1).join(" ");
        if(!reason) return message.lineReply(`Вы не указали причину!`);
        if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`недостаточно прав!`)
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(`недостаточно прав у бота!`)//Проверка на права у бота на сервере
        let reportchan = client.channels.cache.get(`892772996677238784`);
        let embeddm = new Discord.MessageEmbed()
        .setTitle(`Вы успешно кикнули пользователя ${kickUser.user.tag}`)
        .setFooter(`Offical bot by Broken`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTimestamp();
        let embed = new Discord.MessageEmbed()
        .setTitle(`Пользователь ${kickUser.user.tag} был кикнут ${message.author.tag}`)
        .addField(`**Информация:**`, `**Кикнул: ${message.author.tag}[\`ID: ${message.author.id}\`]\nПользователя: ${kickUser.user.tag}[\`ID: ${kickUser.id}\`]**`)
        .addField(`**Причина:**`, `**\`${reason}\`**`)
        .setFooter(`Desert Cave Development | Offical Bot`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTimestamp();
        if(kickUser.user.client === true) return message.channel.send(`Нельзя кикнуть бота`);//Проверка на бота
        kickUser.send(embeddm);
        message.guild.member(kickUser).kick(reason);
        reportchan.send(embed);
    }
}