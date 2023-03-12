const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'vistas');

const adminRoutes = require('./routes/admin');
const rutasTienda = require('./routes/tienda');
const controladorError = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(rutasTienda);

app.use(controladorError.get404);

app.listen(3000);