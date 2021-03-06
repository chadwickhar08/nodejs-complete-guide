const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return cb([]);
                //return [];
            }
            cb(JSON.parse(fileContent));
        });


    }

module.exports = class Product {
    constructor(title, imageUrl, description, price, url){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }

    save() {
        getProductsFromFile(products => {

            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err);
            });

        });

        //const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        //fs.readFile(p, (err, fileContent) => {
            //console.log(fileContent);
            //let products = [];

        //});

    }

    static fetchAll(cb) {
        getProductsFromFile(cb);

}
}