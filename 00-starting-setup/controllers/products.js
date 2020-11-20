//const products = [];

const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {docTitle: "Add Product", path: '/admin/add-product', productCSS: true, formCSS: true, activeAddProduct: true});
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    //products.push({title:req.body.title});
    const product = new Product(req.body.title);
    product.save();
    //console.log(product);
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, docTitle: "Shop", 
    path: '/', 
    hasProducts: products.length > 0, 
    activeShop: true,
    productCSS: true});
    });
    //console.log(products);
    //console.log('shop.js', adminData.products);
    //const products = adminData.products;
    
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  };
