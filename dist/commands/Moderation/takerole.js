"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (!((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.hasPermission('MANAGE_ROLES')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this command.\n\nPermission required: MANAGE_ROLES`));
    if (!((_c = message.member) === null || _c === void 0 ? void 0 : _c.hasPermission('MANAGE_ROLES')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.\n\nPermission required: MANAGE_ROLES`));
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
    var role;
    if (!args.slice(2).join(" ")) {
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid role.`));
    }
    else {
        role = (_h = message.mentions.roles) === null || _h === void 0 ? void 0 : _h.first();
        if (!role) {
            role = (_j = message.guild) === null || _j === void 0 ? void 0 : _j.roles.cache.get(args[1]);
        }
    }
    if (role.rawPosition >= message.guild.me.roles.highest.rawPosition)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I don't have access to this role`));
    if (!user)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid role.`));
    if (role.rawPosition >= message.member.roles.highest.rawPosition)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You don't have access to this role`));
    if (!user.roles.cache.has(role))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} This role is already claimed.`));
    user.roles.remove(`${role}`);
    message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.tick} The role has been removed to ${user.toString()}`));
}
exports.run = run;
exports.help = {
    aliases: ['removerole'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'takerole',
};
exports.memberPerms = [];
exports.permissions = [];
