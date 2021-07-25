"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, message, args) {
    var _a, _b;
    if (!args.slice(1).join(" ")) {
        let categories = new discord_js_1.MessageEmbed()
            .setColor('#94c5e3')
            .setAuthor(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.username}'s commands.`, (_b = client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL())
            .setDescription(`To view the commands in each group use:\n\`\`\`nik help <group>\`\`\``)
            .addField('⚒️Moderation', '7 commands.', true)
            .addField('🤖Automation', '3 commands.', true)
            .addField('❔Info', '8 commands.', true)
            .addField('😂Fun', '3 commands.', true)
            .addField('🐱‍🏍Roleplay', '40 commands.', true);
        message.channel.send(categories);
    }
    else if (args[1].toLowerCase() == 'moderation') {
    }
}
exports.run = run;
exports.help = {
    aliases: ['commands'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'help'
};
exports.memberPerms = [];
exports.permissions = [];
