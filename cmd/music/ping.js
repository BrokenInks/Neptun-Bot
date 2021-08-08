const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "ping",
    description: "client.ws.ping",
    usage: "",
    aliases: ["ping"],
  },

  run: async function (client, message, args) {
        var ping = Math.round(client.ws.ping)
        const Embed = new Discord.MessageEmbed()
            .setColor('#DAF7A6')
            .setTitle(`Пинг: ${client.ws.ping}ms`)
            .setURL('')
            .setAuthor('Мой пинг', message.author.avatarURL(), 'https://discord.js.org/%27')
            .setThumbnail(`https://cdn.discordapp.com/attachments/677202416135045130/685163406059241484/emote.png`)
            .setTimestamp()
            .setFooter('для '+message.author.username, message.author.avatarURL)
        message.channel.send(Embed)
    },
};