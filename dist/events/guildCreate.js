"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, guild) {
    var _a, _b;
    let gg = guild.members.cache.get(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.id}`);
    if (!(gg === null || gg === void 0 ? void 0 : gg.hasPermission('ADMINISTRATOR')))
        await ((_b = guild.owner) === null || _b === void 0 ? void 0 : _b.send('Many functions will not work due to missing permissions, it is recommended to make the bot an administrator'));
    let des = String.raw `
My prefix is: \`nik\`
For the list of commands type \`nik help\`
Join in the support server [***\`https://discord.gg/MnWqpWFFqZ\`***](https://discord.gg/MnWqpWFFqZ)
    `;
    let joined_embed = new discord_js_1.MessageEmbed()
        .setTitle(`:compass: THANKS FOR ADDING ME TO YOUR SERVER :compass:`)
        .setDescription(`
        My prefix is: \`nik\`
        For the list of commands type \`nik help\`
        Join in the support server [***\`https://discord.gg/MnWqpWFFqZ\`***](https://discord.gg/MnWqpWFFqZ)
    `);
    let sender = ``;
    guild.channels.cache.forEach((channel) => {
        if (channel.type == "text" && sender == "") {
            sender = channel;
        }
    });
    sender.send(joined_embed);
}
exports.run = run;
