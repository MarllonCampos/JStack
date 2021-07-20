const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('Server listen on port \u{1F525} http://localhost:3333');
});
