import 'zone.js/node';
import 'reflect-metadata';
import { renderModule } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

const { AppServerModule } = require('./dist/server/main');

const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

const app = express();

// Serve static files from the /browser directory
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();

  renderModule(AppServerModule, {
    document: template,
    url: req.url,
    extraProviders: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
  })
  .then(html => {
    res.status(200).send(html);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
