const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const { postAddProduct } = require('./controllers/admin');
const Cart = require('./models/cart.old');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//GIT SYNC CHANGE
//Syncing with Github

app.use((req, res, next) => {

    User.findById('60532b859b7f19820d662f30').then(user => {


        req.user = new User(user.name, user.email, user.cart, user._id);
        next();

    }).catch(err => {console.log(err);});

});
//Adding updated code.
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {

    app.listen(3000);

});


