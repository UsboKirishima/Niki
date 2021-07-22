"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
class CommandHandler extends discord_js_1.Collection {
    constructor() {
        super();
        this.aliases = {};
        this.categories = [];
        this.list = [];
        this.rawCategories = [];
        this.rawCategories = fs_1.readdirSync('./dist/commands');
        this.rawCategories.forEach(c => fs_1.readdirSync(`./dist/commands/${c}`).forEach(cmd => {
            this.list.push(cmd.slice(0, -3));
            const command = require(`../commands/${c}/${cmd}`); // eslint-disable-line @typescript-eslint/no-var-requires, global-require
            this.set(cmd.slice(0, -3), command);
            command.help.aliases.forEach(alias => this.aliases[alias] = cmd.slice(0, -3));
            this.aliases[cmd.slice(0, -3)] = cmd.slice(0, -3);
            if (!this.categories.includes(command.help.category))
                this.categories.push(command.help.category);
        }));
    }
}
exports.default = CommandHandler;
