const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "e",
    description: "evaled",
    usage: "",
    aliases: ["e", "eval"],
  },

  run: async function (client, message, args) {
    let code = args.join(" ");
    try {
        let evaled = await eval(code);
        if (message.author.id !== "852626327310696538") return message.channel.send("No, this owner command");
        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
        message.channel.send(["Код исполнен за " + `${Date.now() - message.createdTimestamp}` + "ms\n" + evaled], {code: "js"})
    } catch (e) {
        if (typeof (e) == "string") e = e.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
        const Embed = new Discord.MessageEmbed()
            .setTitle("Произошла ошибка")
            .setDescription("`​``" + e + "`​``")
        message.channel.send(Embed)
    }
}}
