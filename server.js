// для установки: npm install --save express path
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(`${__dirname}/dist/angular-heroku`));
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/angular-heroku/index.html`));
});
// default Heroku PORT
app.listen(process.env.PORT || 3000);
