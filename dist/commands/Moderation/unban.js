"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a, _b, _c;
    if (!((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.hasPermission('BAN_MEMBERS')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this commands.\n\nPlease give me BAN_MEMBERS permissions.`));
    if (!((_c = message.member) === null || _c === void 0 ? void 0 : _c.hasPermission('BAN_MEMBERS')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't user this command.`));
    let user;
    if (!args[0]) {
        return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid User`));
    }
    const gg = client.users;
    // Check if the arg is an ID or a username
    const isId = !isNaN(args[1]);
    if (isId) {
        // Try to find a user with that ID
        await client.users.fetch(args[1]).then((u) => {
            // if a user was found
            user = u;
        }).catch(() => { });
    }
    else if (!isId) {
        const arr = args[1].split("#");
        if (arr.length < 2) {
            return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} User not found`));
        }
        user = gg.filter((u) => u.username === arr[1]).find((u) => u.discriminator === arr[1]);
    }
    //if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
    const banned = await message.guild.fetchBans();
    if (!banned.some((e) => e.user.id === user.user.id))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} This user isn't banned.`));
    let hh = message.guild;
    let embed = new discord_js_1.MessageEmbed()
        .setAuthor(user.user.tag + ' Has been Unbanned!', user.user.displayAvatarURL({ dynamic: true }))
        .addField('🏘️Server', `\`\`\`${message.guild.name}\`\`\``, true)
        .addField('<:discord_staff:858288062374608957> Moderator', `\`\`\`${message.author.tag}\`\`\``, true)
        .setFooter('[UNBAN]', hh.iconURL({ dynamic: true }))
        .setTimestamp();
    message.delete();
    message.channel.send(embed);
    message.guild.members.unban(user);
    user.send(embed);
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'unban',
};
exports.memberPerms = [];
exports.permissions = [];
