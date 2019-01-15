const express = require('express');

const app = express();

const home = require('./api/home.mjs');
const contact = require('./api/contact.mjs');

app.get('/', home);
app.get('/api/contact', contact);


app.listen(3000, () => {
  console.log("Server up and running.")
});
