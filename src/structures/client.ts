import * as config from '../config.json';
import CommandHandler from './commandhandler';
import { Functions } from './functions';
import { Client, Collection, Util } from 'discord.js';
import type { GuildEmoji, Snowflake } from 'discord.js';



interface ConfigObject {
  contributors: Snowflake[];
  embedColor: string;
  emojis: { [ emoji: string ]: Snowflake };
  muteColor: string;
  officialClient: Snowflake;
  ownerID: Snowflake;
  suggestions: Snowflake;
  version: string;
}

export type EmoteName = 'online'
  | 'idle'
  | 'dnd'
  | 'offline';



export interface ReknownEvent {
  run: (...args: any) => void;
}



export default class ReknownClient extends Client {
  public commands = new CommandHandler();

  public config: ConfigObject = config;

  public emotes = new Collection<EmoteName, GuildEmoji>();

  public escMD = Util.escapeMarkdown;

  public escInline = (str: string) => str.replace(/`/g, '\u200B`\u200B');

  public events = new Collection<string, ReknownEvent>();

  public functions = new Functions();


}

