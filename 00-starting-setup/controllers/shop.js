const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, docTitle: "All Products", path: '/products'});
    });
    //console.log(products);
    //console.log('shop.js', adminData.products);
    //const products = adminData.products;
    
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  };


  exports.getIndex = (req, res, next) => {

    Product.fetchAll((products) => {
        res.render('shop/index', {prods: products, docTitle: "Shop", path: '/'});
    });

  };

  exports.getCart = (req, res, next) => {

    res.render('shop/cart', {path: '/cart', docTitle: 'Your Cart'});

  };

  exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {path: '/checkout', docTitle: 'Checkout'});

  };
