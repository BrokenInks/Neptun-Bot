const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const ms = require('ms') // npm i ms
module.exports = {
    name: 'ban',
    cooldown: 5,
    category: 'moderation',
    execute(message, args, client) {
        //lets use parameters (optional)
        /**
         * @param {Message} message
         */
        //so firstly we will check whether the author of the message has permissions
        //this line means if the author doesn't have manage roles permission it will stop the process and send the following text
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission.')
        //next we define some variables
        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.channel.send('Укажите пользователя') //when no member is pinged
        const reason = args [1]
        if(!reason) return message.reply('Укажите причину') // If Time Is Not Provided
        const time = args [2]
        if(!time) return message.reply('Укажите время') // If Time Is Not Provided
        //now the code!!
         target.roles.add("872129570550194236") // adding the role to the user
        message.channel.send(`Пользователь ${target.user.username} успешно отправлен в Сибирь! по причине ${reason}`)
        client.channels.cache.find(channel => channel.name == "403").send(`${target.user.username} вы заблокированы по причине: ${reason} на ${time}`)

        // Unban A User After Time Is Finished
        setTimeout(async () => {
            target.roles.remove('872129570550194236')
            message.channel.send(`Пользователь ${target.user.username} успешно возвращен из Сибири!`)
        }, ms(time))

    }
}
