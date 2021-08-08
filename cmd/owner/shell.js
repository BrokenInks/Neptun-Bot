const { Client, Message, MessageEmbed} = require("discord.js");
const child = require("child_process");

module.exports = {
    name: 't',
    category: 'owner',
    execute(message, args, client) {
    	if (message.author.id !== "852626327310696538") return;

    	const command = args.join(" ");
    	if (!command)
    		return message.lineReply("Пожалуйста укажите команду для выполнения");

    	child.exec(command, (err, res) => {
    		if (err) return console.log(err);
    		message.channel.send(res.slice(0, 2000), { code: "js"});
    	});
    },
};