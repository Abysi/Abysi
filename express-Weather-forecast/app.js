const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');

// app.use(adminRoutes);
// app.use(errorController.get404);

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(result => {
    app.listen(process.env.SERVER_PORT);
  })
  .catch(err => {
    console.log(err);
  });

