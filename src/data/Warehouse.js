import Product from "./Product.js"

class Warehouse {

    constructor() {

        this.products = [

            new Product("1234", "orange juice", "fruits", 10, 1.5),
            new Product("1235", "milk", "dairy", 10, 2),
            new Product("1236", "chocolate", "sweets", 10, 3)
        ]

    }

    add(id, name, category, quantity, price) {

        if (id === "" && name === "" && category === "" && quantity < 0 && price < 0) return false;

        const product = new Product(id, name, category, quantity, price);

        this.products.push(product);

        return true
    }

    sell(id, quantity) {

        // First we have to find the product

        const product = this.products.find(product => product.getId() === id);

        if (!product) return false;

        return product.sell(quantity);
    }

    changeQuantity(id, change) {

        const product = this.products.find(product => product.getId() === id);

        if (product === null) return false;

        return product.changeQuantity(change);
    }
}

export default Warehouse;

