const cart = require('./cart');
const db = require('../util/database');

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    //adding a comment to update git repo
  }

  save() {
    return db.execute('INSERT INTO products2 (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
    [this.title, this.price, this.description, this.imageUrl]
    
    );
  }

  static deleteById(id) {

  }

  static fetchAll() {
    return db.execute('SELECT * FROM products2');

  }

  static findById(id, cb) {
    return db.execute('SELECT * FROM products2 WHERE products2.id = ?', [id]);
   
  }
};
