"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const prefix = 'nik ';
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    if (!args.slice(1).join(" ")) {
        let categories = new discord_js_1.MessageEmbed()
            .setColor('#94c5e3')
            .setAuthor(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.username}'s commands.`, (_b = client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL())
            .setDescription(`To view the commands in each group use:\n\`\`\`nik help <group>\`\`\``)
            .addField('⚒️Moderation', '7 commands.', true)
            .addField('🤖Automation', '3 commands.', true)
            .addField('❔Info', '5 commands.', true)
            .addField('🎉Misc', '9 commands.', true)
            .addField('😂Fun', '3 commands.', true)
            .addField('🐱‍🏍Roleplay', '40 commands.', true)
            .addField('💞Ship', '1 commands.', true)
            .addField('⚔️ Together', '1 commands.', true)
            .addField('\u200b', '\u200b', true);
        message.channel.send(categories)
    }
    else if (args[1].toLowerCase() == 'moderation') {
        let moderation = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_c = client.user) === null || _c === void 0 ? void 0 : _c.username}'s commands.`, (_d = client.user) === null || _d === void 0 ? void 0 : _d.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}ban\` :: Ban a user.
        \`${prefix}softban\` :: Bans then unbans a member, which clears 7 days of messages.
        \`${prefix}kick\` :: Kick a user from the server.
        \`${prefix}nick\` :: Change the bot nickname.
        \`${prefix}giverole\` :: Give a role to a user.
        \`${prefix}takerole\` :: Remove a role to a user.
        \`${prefix}clear\` :: Delete messages with or without a filter.
        `);
        message.channel.send(moderation);
    }
    else if (args[1].toLowerCase() == 'automation') {
        let automation = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_e = client.user) === null || _e === void 0 ? void 0 : _e.username}'s commands.`, (_f = client.user) === null || _f === void 0 ? void 0 : _f.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}welcome\` :: Set a welcome message & welcome channel.
        \`${prefix}autorole\` :: When a user join give a role.
        \`${prefix}counter\` :: Show Member & Bots count.
        `);
        message.channel.send(automation);
    }
    else if (args[1].toLowerCase() == 'info') {
        let info = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_g = client.user) === null || _g === void 0 ? void 0 : _g.username}'s commands.`, (_h = client.user) === null || _h === void 0 ? void 0 : _h.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}userinfo\` :: Show the info of a user.
        \`${prefix}serverinfo\` :: Show the info of the server.
        \`${prefix}botinfo\` :: Show the info of Niki.
        \`${prefix}help\` :: Show all commands.
        \`${prefix}spotify\` :: Show song a user is listening to.
        `);
        message.channel.send(info);
    }
    else if (args[1].toLowerCase() == 'misc') {
        let misc = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_j = client.user) === null || _j === void 0 ? void 0 : _j.username}'s commands.`, (_k = client.user) === null || _k === void 0 ? void 0 : _k.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}anime\` :: Generate a random anime.
        \`${prefix}avatar\` :: Show the avatar of a user.
        \`${prefix}djs\` :: Search something in the discord.js source code.
        \`${prefix}docs\` :: Search something in the discord.js docs.
        \`${prefix}emojis\` :: Show all emojis of the server.
        \`${prefix}invitegen\` :: Generate a invite of the server.
        \`${prefix}invite\` :: Show the bot invite.
        \`${prefix}ping\` :: Show the bot ping.
        \`${prefix}staff\` :: Show all moderator/Administrators of the server.
        `);
        message.channel.send(misc);
    }
    else if (args[1].toLowerCase() == 'fun') {
        let fun = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_l = client.user) === null || _l === void 0 ? void 0 : _l.username}'s commands.`, (_m = client.user) === null || _m === void 0 ? void 0 : _m.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}8ball\` :: Ask a question and get an answer.
        \`${prefix}gay\` :: Show the gaymeter.
        \`${prefix}yn\` :: Ask a question and get an answer (Yes or No).
        `);
        message.channel.send(fun);
    }
    else if (args[1].toLowerCase() == 'roleplay') {
        let roleplay = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_o = client.user) === null || _o === void 0 ? void 0 : _o.username}'s commands.`, (_p = client.user) === null || _p === void 0 ? void 0 : _p.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}baka\`
        \`${prefix}bite\`
        \`${prefix}blowkiss\` 
        \`${prefix}blush\`
        \`${prefix}boast\` 
        \`${prefix}bonk\` 
        \`${prefix}bored\` 
        \`${prefix}bye\`
        \`${prefix}cheer\`
        \`${prefix}confused\` 
        \`${prefix}cry\` 
        \`${prefix}cute\` 
        \`${prefix}dab\`
        \`${prefix}dance\` 
        \`${prefix}dead\` 
        \`${prefix}eat\`
        \`${prefix}facepalm\` 
        \`${prefix}fear\` 
        \`${prefix}feed\` 
        \`${prefix}fight\` 
        \`${prefix}glomp\`
        \`${prefix}goodmorning\` 
        \`${prefix}goodnight\`
        \`${prefix}grumpy\`
        \`${prefix}happy\`
        \`${prefix}hate\` 
        \`${prefix}hello\`
        \`${prefix}highfive\` 
        \`${prefix}hug\` 
        \`${prefix}kill\` 
        \`${prefix}kiss\`
        \`${prefix}laugh\` 
        \`${prefix}lewd\` 
        \`${prefix}lick\` 
        \`${prefix}love\` 
        \`${prefix}lurk\` 
        \`${prefix}mad\` 
        \`${prefix}no\` 
        \`${prefix}nom\` 
        \`${prefix}nope\`
        `);
        message.channel.send(roleplay);
    }
    else if (args[1].toLowerCase() == 'ship') {
        let ship = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_q = client.user) === null || _q === void 0 ? void 0 : _q.username}'s commands.`, (_r = client.user) === null || _r === void 0 ? void 0 : _r.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}ship\` :: Shows the love between two people.
        `);
        message.channel.send(ship);
    }
    else if (args[1].toLowerCase() == 'together') {
        let ship = new discord_js_1.MessageEmbed()
            .setAuthor(`${(_s = client.user) === null || _s === void 0 ? void 0 : _s.username}'s commands.`, (_t = client.user) === null || _t === void 0 ? void 0 : _t.displayAvatarURL())
            .setColor('#94c5e3')
            .setDescription(`
        \`${prefix}together\` :: Watch youtube & Play games.

        -- Type \`${prefix} together help\` for all options.
        `);
        message.channel.send(ship);
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
