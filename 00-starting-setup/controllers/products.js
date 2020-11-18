const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {docTitle: "Add Product", path: '/admin/add-product', productCSS: true, formCSS: true, activeAddProduct: true});
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    products.push({title:req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    //console.log('shop.js', adminData.products);
    //const products = adminData.products;
    res.render('shop', {prods: products, docTitle: "Shop", 
    path: '/', 
    hasProducts: products.length > 0, 
    activeShop: true,
    productCSS: true});
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  };
