import type ColumnTypes from '../typings/ColumnTypes';
import type { EmoteName } from '../structures/client';
import type ReknownClient from '../structures/client';
import type { Snowflake } from 'discord.js';
import { tables } from '../Constants';
import express from 'express'
import path from 'path'





export async function run (client: ReknownClient) {
  console.log(`Successfully logged in as ${client.user!.tag} (${client.user!.id}).`);

  for (const emoji in client.config.emojis) {
    if (Object.prototype.hasOwnProperty.call(client.config.emojis, emoji)) {
      client.emotes.set(emoji as EmoteName, client.emojis.cache.get(client.config.emojis[emoji])!);
    }
  }

  const nodes = [{ id: '1', host: 'localhost', port: 2333, password: process.env.LAVALINK_PASS! }];

  const details = {
    guilds: client.guilds.cache.size,
    users: client.users.cache.size,
    channels: client.channels.cache.size
  }

  //website

  const app = express()
  
  const port = 3000 || 3001;

  app.get("/", (req, res) => {
    res.status(200).send(details)
  })

  app.get("/info", (req, res) => {
    res.status(200).send(details)
  })

  app.listen(port)
}
