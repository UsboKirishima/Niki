"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, message, args) {
    const question = args.slice(1).join(" ");
    const choices = [
        'Yes',
        'No',
        'Absoloutely',
        'Absoloutely not',
        'Try again later',
        'Maybe',
        "I don't care for it",
    ];
    let respond = choices[Math.floor(Math.random() * choices.length)];
    return await message.channel.send(new discord_js_1.MessageEmbed()
        .setAuthor(`[8BALL] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .addField('Question', question)
        .addField('Answer', respond)
        .setColor('RANDOM'));
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: '8ball',
};
exports.memberPerms = [];
exports.permissions = [];
