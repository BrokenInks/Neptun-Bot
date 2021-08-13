const blacklist = require('../../models/blacklist')
const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'gulag',
    category: 'owner',
    execute(message, args, client) {
        if(message.author.id !== '852626327310696538') return message.channel.send('This is an owner only command.')
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`**${User.displayName}** has already been blacklisted!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(`${User.user.tag} has been added to blacklist.`)
            }
           
        })
    }
}