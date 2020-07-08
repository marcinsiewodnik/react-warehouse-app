class Product {

    constructor(id, name, category, currentQuantity, unitPrice) {

        // encapsulation

        let _id = id;
        let _name = name;
        let _category = category;
        let _currentQuantity = currentQuantity;
        let _soldQuantity = 0;
        let _unitPrice = unitPrice;

        // getters -> we can't access data directly

        this.getId = () => {

            return _id;
        }

        this.getProductData = () => {

            return (

                {
                    id: _id,
                    name: _name,
                    category: _category,
                    currentQuantity: _currentQuantity,
                    soldQuantity: _soldQuantity,
                    unitPrice: _unitPrice
                }
            )
        }

        // Methods to menage the state

        this.sell = (quantity) => {

            if (quantity < 0) return false;

            if (quantity > _currentQuantity) return false;

            // When we sell a product we change the quantity in stock and sold quantity

            _currentQuantity -= quantity;
            _soldQuantity += quantity;

            return true;
        }

        this.changeQuantity = (change) => {

            const newQuantity = _currentQuantity + change;

            if (newQuantity >= 0) {

                _currentQuantity = newQuantity;

                return true;
            }

            return false;
        }
    }
}

export default Product;