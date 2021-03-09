// const cart = require('./cart');
// const db = require('../util/database');

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//     //adding a comment to update git repo
//   }

//   save() {
//     return db.execute('INSERT INTO products2 (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
//     [this.title, this.price, this.description, this.imageUrl]
    
//     );
//   }

//   static deleteById(id) {

//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products2');

//   }

//   static findById(id, cb) {
//     return db.execute('SELECT * FROM products2 WHERE products2.id = ?', [id]);
   
//   }
// };

const mongoConnect = require('../util/database');

class Product {

  constructor(title, price, description, imageUrl) {

    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {



  }

}

const Product = sequelize.define('product', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type:Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Product;



