const { readdirSync } = require("fs");

const ascii = require("ascii-table");

let table = new ascii("cmd");
table.setHeading("Command", "Load status");

module.exports = (client) => {
    readdirSync("./cmd/").forEach(dir => {
        const cmd = readdirSync(`./cmd/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of cmd) {
            let pull = require(`../cmd/${dir}/${file}`);

            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });

    console.log(table.toString());
}