"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.hasPermission('KICK_MEMBERS')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this commands.\n\nPlease give me KICK_MEMBERS permissions.`));
    if (!((_c = message.member) === null || _c === void 0 ? void 0 : _c.hasPermission('KICK_MEMBERS')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't user this command.`));
    var user;
    if (!args.slice(1).join(" ")) {
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
    }
    else {
        user = (_d = message.mentions.members) === null || _d === void 0 ? void 0 : _d.first();
        if (!user) {
            user = ((_e = message.guild) === null || _e === void 0 ? void 0 : _e.members.cache.get(args[1])) || ((_f = message.guild) === null || _f === void 0 ? void 0 : _f.members.cache.find(user => user.user.username.toLowerCase() == args[1])) || ((_g = message.guild) === null || _g === void 0 ? void 0 : _g.members.cache.find(user => user.user.tag.toLowerCase() == args[1]));
        }
    }
    if (!user)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
    if (user.hasPermission('ADMINISTRATOR'))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't kick a Moderator.`));
    let reason;
    reason = args.slice(2).join(" ");
    if (!reason) {
        reason = 'No reason provided.';
    }
    let hh = message.guild;
    let embed = new discord_js_1.MessageEmbed()
        .setAuthor(user.user.tag + ' Has been kicked!', user.user.displayAvatarURL({ dynamic: true }))
        .addField('🏘️Server', `\`\`\`${message.guild.name}\`\`\``, true)
        .addField('<:discord_staff:858288062374608957> Moderator', `\`\`\`${message.author.tag}\`\`\``, true)
        .addField('📑Reason', `\`\`\`${reason}\`\`\``, true)
        .setFooter('[KICK]', hh.iconURL({ dynamic: true }))
        .setTimestamp();
    message.delete();
    message.channel.send(embed);
    user.kick(`${reason}`);
    user.send(embed);
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'kick',
};
exports.memberPerms = [];
exports.permissions = [];
