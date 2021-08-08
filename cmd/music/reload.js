const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "",
    description: "",
    usage: "",
    aliases: ["r", "reload", "rcmd"],
  },

  run: async function (client, message, args) {
        if (message.author.id !=="778512157926883328") return message.channel.send("No, this owner command");
        if (!args[0]) return message.channel.send("You must input category.");
        if (!args[1]) return message.channel.send("You must input a command name.");

        let category = args[0].toLowerCase();
        let command = args[1].toLowerCase();

        try{
            delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
            client.commands.delete(command);

            const pull = require(`../../commands/${category}/${command}.js`);
            client.commands.set(command, pull);

            return message.channel.send(`Done reload **${command}**`);
        }catch (error) {
            return message.channel.send(`Error reloaind **${command}**: \`${error.message}\``)
        }
    }}