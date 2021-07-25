"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a, _b, _c, _d, _e;
    if (!args.slice(1).join(' ')) {
        let embed = new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('[HELP -SHIP]', (_a = client.user) === null || _a === void 0 ? void 0 : _a.displayAvatarURL())
            .setDescription("```nik ship @user @user```");
        message.channel.send(embed);
    }
    else {
        var user1;
        if (!args.slice(1).join(" ")) {
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
        }
        else {
            user1 = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
            if (!user1) {
                user1 = (_c = message.guild) === null || _c === void 0 ? void 0 : _c.members.cache.get(args[1]);
            }
        }
        if (!user1)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
        var user2;
        if (!args.slice(2).join(" ")) {
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
        }
        else {
            user2 = (_d = message.mentions.members) === null || _d === void 0 ? void 0 : _d.last();
            if (!user2) {
                user2 = (_e = message.guild) === null || _e === void 0 ? void 0 : _e.members.cache.get(args[2]);
            }
        }
        if (!user2)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Mention two users.\n\n\`\`\`ship @user @user\`\`\``));
        //canvas 
        /*
                registerFont(path.join(__dirname, '../../../assets/Fonts/Tangerine-Bold.ttf'), { family: 'Tangerine' })
                const canvas = createCanvas(3000, 1641)
                const ctx = canvas.getContext('2d')
        
                const background = await loadImage(
                    path.join(__dirname, '../../../assets/images/blackground.png')
                )
                let x = 0
                let y = 0
                ctx.drawImage(background, x, y)
                ctx.arc(125,120,100,0,2*Math.PI);
                ctx.fillStyle = '#ff0040'
                ctx.font = '200px "Arial"'
                let text = `${Math.floor(Math.random() * (100 - 1)) + 1}%`
                x = canvas.width / 2 - ctx.measureText(text).width / 2
                y = canvas.height / 2
                ctx.fillText(text, x, y)
        
                const us1 = await loadImage(
                    user1.user.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 })
                )
                const us2 = await loadImage(
                    user2.user.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 })
                )
                y = canvas.height / 2 - 350
                ctx.arc(x, y, 3000, 0, Math.PI * 2)
                ctx.clip()
                ctx.drawImage(us1, 300, y, 700, 700)
                ctx.drawImage(us2, 2000, y, 700, 700)
        
                const attachment = new MessageAttachment(canvas.toBuffer())
                message.channel.send(attachment)*/
        let embedl = new discord_js_1.MessageEmbed()
            .setColor('#ff0040')
            .setAuthor(`[SHIP] ${user1.user.tag} + ${user2.user.tag}`)
            .setDescription(`${user1.user.username} + ${user2.user.username} = ${Math.floor(Math.random() * (100 - 1)) + 1}% :heart:`);
        message.channel.send(embedl);
    }
}
exports.run = run;
exports.help = {
    aliases: ['love'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'ship'
};
exports.memberPerms = [];
exports.permissions = [];
function radius(x, y, radius, arg3, arg4) {
    throw new Error('Function not implemented.');
}
