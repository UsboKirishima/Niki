"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
const db = __importStar(require("quick.db"));
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    if (!args.slice(1).join(" ")) {
        let g = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.iconURL({ dynamic: true });
        message.channel.send(new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('[AUTO ROLE] ' + ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.name), g)
            .setDescription(`
            *-ENABLE-*
            Type \`autorole + [on/off]\`

            ________________________________________________

            *-ROLE-*
            Type \`autorole + [roloe id/@]\`
            `));
    }
    if (args[1].toLowerCase() == 'on') {
        if (!((_d = (_c = message.guild) === null || _c === void 0 ? void 0 : _c.me) === null || _d === void 0 ? void 0 : _d.hasPermission('MANAGE_CHANNELS')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this command.\n\nPermission required: MANAGE_CHANNELS.`));
        if (!((_e = message.member) === null || _e === void 0 ? void 0 : _e.hasPermission('MANAGE_GUILD')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.\n\nPermissions: MANAGE_GUILD`));
        if (db.get(`ar.${(_f = message.guild) === null || _f === void 0 ? void 0 : _f.id}.enable`) == true)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Auto role is already enabled.\n\nType \`autorole + [OFF]\` to disable.`));
        db.set(`ar.${(_g = message.guild) === null || _g === void 0 ? void 0 : _g.id}.enable`, true);
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.tick} Auto role has been enabled.`));
    }
    if (args[1].toLowerCase() == 'off') {
        if (!((_j = (_h = message.guild) === null || _h === void 0 ? void 0 : _h.me) === null || _j === void 0 ? void 0 : _j.hasPermission('MANAGE_CHANNELS')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this command.\n\nPermission required: MANAGE_CHANNELS.`));
        if (!((_k = message.member) === null || _k === void 0 ? void 0 : _k.hasPermission('MANAGE_GUILD')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.\n\nPermissions: MANAGE_GUILD`));
        if (db.get(`ar.${(_l = message.guild) === null || _l === void 0 ? void 0 : _l.id}.enable`) == false || db.get(`ar.${(_m = message.guild) === null || _m === void 0 ? void 0 : _m.id}.enable`) == undefined || db.get(`ar.${(_o = message.guild) === null || _o === void 0 ? void 0 : _o.id}.enable`) == null)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Auto role is already enabled.\n\nType \`autorole + [ON]\` to enable.`));
        db.delete(`ar.${(_p = message.guild) === null || _p === void 0 ? void 0 : _p.id}.enable`);
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.tick} Auto role has been disabled.`));
    }
    if (args[1].toLowerCase() == 'role') {
        if (!((_r = (_q = message.guild) === null || _q === void 0 ? void 0 : _q.me) === null || _r === void 0 ? void 0 : _r.hasPermission('MANAGE_CHANNELS')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this command.\n\nPermission required: MANAGE_CHANNELS.`));
        if (!((_s = message.member) === null || _s === void 0 ? void 0 : _s.hasPermission('MANAGE_GUILD')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.\n\nPermissions: MANAGE_GUILD`));
        if (db.get(`ar.${(_t = message.guild) === null || _t === void 0 ? void 0 : _t.id}.enable`) == false || db.get(`ar.${(_u = message.guild) === null || _u === void 0 ? void 0 : _u.id}.enable`) == undefined || db.get(`ar.${(_v = message.guild) === null || _v === void 0 ? void 0 : _v.id}.enable`) == null)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Enable this command first!\n\nType \`autorole [ON]\` for enable this command.`));
        var role;
        if (!args.slice(1).join(" ")) {
            message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid role.`));
        }
        else {
            role = (_w = message.mentions.roles) === null || _w === void 0 ? void 0 : _w.first();
            if (!role) {
                role = (_x = message.guild) === null || _x === void 0 ? void 0 : _x.roles.cache.get(args[1]);
            }
        }
        if (!role)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid role.`));
        db.set(`ar.${(_y = message.guild) === null || _y === void 0 ? void 0 : _y.id}.role`, role.id);
        return await message.channel.send(`${emojis_json_1.tick} The role has been set.`);
    }
}
exports.run = run;
exports.help = {
    aliases: ['rolejoin', 'automaticrole'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'autorole'
};
exports.memberPerms = [];
exports.permissions = [];
