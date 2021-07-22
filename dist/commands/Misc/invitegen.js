"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
async function run(client, message, args) {
    var _a, _b, _c;
    let gg = (_c = (await ((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels.cache.get(message.channel.id)) === null || _b === void 0 ? void 0 : _b.createInvite({ maxAge: 0, maxUses: 0 })))) === null || _c === void 0 ? void 0 : _c.toString();
    message.channel.send(`New Invite for you! **${gg}**`);
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'invitegen',
};
exports.memberPerms = [];
exports.permissions = [];
