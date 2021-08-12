const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const ms = require('ms') // npm i ms
module.exports = {
    name: 'unban',
    cooldown: 5,
    category: 'moderation',
    execute(message, args, client) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission.')
        //next we define some variables
        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.channel.send('Укажите пользователя') //when no member is pinged
        const reason = args [1]
            target.roles.remove('872129570550194236')
            message.channel.send(`User ${target.user.username} unbanned of this server`)
         ms(time)
    
    }}
