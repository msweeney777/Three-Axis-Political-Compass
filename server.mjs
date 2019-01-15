import express from 'express';

const app = express();

import home from './app/index.mjs';
import contact from './app/views/contact.mjs';

app.get('/', home);
app.get('/contact', contact);


app.listen(3000, () => {
  console.log("Server up and running.")
});
