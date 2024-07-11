const express = require('express');
const db = require('./db');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const Person = require('./modules/Person');
const Menu = require('./modules/Menu');

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes)

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
