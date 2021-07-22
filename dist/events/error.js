"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, err) {
    console.log(err);
    const dmme = client.users.cache.get('848463685374443530');
    let embed = new discord_js_1.MessageEmbed()
        .setDescription("```ts\n" + err + "```");
    dmme.send(embed);
}
exports.run = run;
