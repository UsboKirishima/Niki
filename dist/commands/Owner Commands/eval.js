"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
require("discord-reply");
const util_1 = require("util");
async function run(client, message, args) {
    if (message.author.id !== '848463685374443530')
        return message.channel.send(`You can\'t use this command -_-!'`);
    const input = args.slice(1).join(" ");
    if (!input)
        return message.channel.send(`<:xeli:847843098746552331> | Please provide a output.`);
    if (input == 'client.destroy()' || input == 'process.exit(1)' || input == 'client.login()')
        return message.channel.send('ahahahahahahaahahahahahahahahahaahah Fuck u -_-');
    try {
        const result = await eval(input);
        let output = result;
        if (typeof result !== 'string') {
            output = util_1.inspect(result);
        }
        const embed = new discord_js_1.MessageEmbed()
            .setColor('#00000')
            .addField('Eval Input', `\`\`\`${args.slice(1).join(" ")}\`\`\``)
            .addField('Eval Output', `\`\`\`ts\n${output}\`\`\``)
            .addField('Eval Type', `\`\`\`${typeof result}\`\`\``);
        message.channel.send(embed);
    }
    catch (error) {
        //console.log(error)
        let lol = new discord_js_1.MessageEmbed()
            .setDescription("```ts\n" + error + "```");
        message.channel.send(lol);
    }
}
exports.run = run;
exports.help = {
    aliases: ['ev'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'eval'
};
exports.memberPerms = [];
exports.permissions = [];
