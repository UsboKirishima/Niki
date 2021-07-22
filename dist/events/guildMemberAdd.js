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
exports.run = void 0;
const db = __importStar(require("quick.db"));
async function run(client, member, message) {
    if (!db.get(`counter.${member.guild.id}`))
        return;
    let amember = db.get(`counter.${member.guild.id}.amembers`);
    let memberD = db.get(`counter.${member.guild.id}.members`);
    let bots = db.get(`counter.${member.guild.id}.bots`);
    var server = member.guild;
    var botCount = server.members.cache.filter(member => member.user.bot).size;
    var memberCount = server.memberCount - botCount;
    if (!amember) {
        return;
    }
    else {
        let me = member.guild.channels.cache.get(amember);
        if (!me)
            return;
        me.setName(`All members: ${member.guild.memberCount}`);
    }
    if (!memberD) {
        return;
    }
    else {
        let mi = member.guild.channels.cache.get(memberD);
        if (!mi)
            return;
        mi.setName(`Members: ${memberCount}`);
    }
    if (!bots) {
        return;
    }
    else {
        let bo = member.guild.channels.cache.get(bots);
        if (!bo)
            return;
        bo.setName(`Bots: ${botCount}`);
    }
}
exports.run = run;
