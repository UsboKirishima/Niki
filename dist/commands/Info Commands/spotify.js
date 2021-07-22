"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var user;
    if (!args.slice(1).join(" ")) {
        user = message.member;
    }
    else {
        user = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        if (!user) {
            user = ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.members.cache.get(args[1])) || ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.members.cache.find(user => user.user.username.toLowerCase() == args.slice(1).join(" "))) || ((_d = message.guild) === null || _d === void 0 ? void 0 : _d.members.cache.find(user => user.user.tag.toLowerCase() == args.slice(1).join(" ")));
        }
    }
    if (!user)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
    const spotify = user.presence.activities.find((value) => value.name.toLowerCase() == 'spotify');
    if (!spotify)
        return message.channel.send(new discord_js_1.MessageEmbed()
            .setDescription(`${user.user.tag} isn't listening to Spotify.`));
    return message.channel.send(new discord_js_1.MessageEmbed()
        .setTitle(spotify.details)
        .setDescription(`by **${spotify.state}** on **${(_f = (_e = spotify.assets) === null || _e === void 0 ? void 0 : _e.largeText) !== null && _f !== void 0 ? _f : "apparently unknown? Discord didn't display the data correctly"}**`)
        .setThumbnail(`https://i.scdn.co/image/${(_h = (_g = spotify.assets) === null || _g === void 0 ? void 0 : _g.largeImage) === null || _h === void 0 ? void 0 : _h.slice(8)}`)
        .setColor('RANDOM'));
}
exports.run = run;
exports.help = {
    aliases: ['song'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'spotify',
};
exports.memberPerms = [];
exports.permissions = [];
