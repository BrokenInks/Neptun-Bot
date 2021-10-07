const { MessageEmbed } = require('discord.js');
const { Client } = require("discord.js");
const Discord = require('discord.js');
const strftime = require('strftime')
module.exports = {
    name: "user",
    aliases: ["userinfo", "me"],
    category: "info",
    execute(message, args, client) {
            let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
                    let user
            if (member) user = member.user
            else user = message.author
         
            let avatar = user.avatarURL({size: 2048, dynamic: true});
            let status = {
                online: 'В сети',
                idle: 'Нет на месте',
                dnd: 'Не беспокоить',
                offline: 'Не в сети'
            }
            let bot = {
                "true": "да",
                "false": "нет"
            }
            
         
            let day = 1000 * 60 * 60 * 24
            let date1 = new Date(message.createdTimestamp)
            let date2 = new Date(user.createdTimestamp)
            let date3 = new Date(message.guild.member(user).joinedTimestamp)
            let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
            let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))
         
            let embed = new Discord.MessageEmbed()
            .setAuthor(user.tag, avatar)
            .addFields(
              {name: 'Основное', value: `**Имя:** ${user.tag}\n**Статус:** ${status[user.presence.status]}\n**Бот:** ${bot[user.bot]}`},
              {name: 'Даты', value: `**Дата регистрации:** ${strftime('%d.%m.%Y в %H:%M:%S', new Date(user.createdTimestamp))} (${diff1} дн. назад)\n**Дата вступления:** ${strftime('%d.%m.%Y в %H:%M:%S', new Date(message.guild.member(user).joinedTimestamp))} (${diff2} дн. назад)`}
            )
            .setColor('9f5f80')
            .setTimestamp()
            .setThumbnail(avatar)
            .setFooter(`ID: ${user.id}`)
            message.channel.send(embed)
            }
        }
    
