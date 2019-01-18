import express from 'express';

const app = express();

import home from './app/index.mjs';
import contact from './app/views/contact.mjs';

import plot from './app/api/plot.mjs' 

app.get('/', home);
app.get('/contact', contact);

app.post('api/plot.mjs', plot);

app.listen(3000, () => {
  console.log("Server up and running.")
});
