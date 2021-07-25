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


/*
    const guilds = client.guilds.cache.size
    const users = client.users.cache.size
    const channels = client.channels.cache.size
    const uptime = require('ms')(client.uptime)


  //website

  const app = express()
  
  const port = 3000 || 3001;

  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'ejs');

  app.get("/", (req, res) => {
    res.render('index', { guilds, users, channels, uptime })
  })


  app.listen(port)*/
}
