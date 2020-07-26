import React from 'react';

class SellProduct extends React.Component {

    constructor(props) {

        super(props);

        const { product } = props;

        this.state = {

            id: product.id,
            name: product.name,
            category: product.category,
            quantityInStock: product.quantityInStock,
            unitPrice: product.unitPrice,
            quantityToSell: 0,
            changeDetected: false
        }
    }


    handleSell = (e) => {

        const { sell } = this.props;

        const { quantityToSell, id, name, category, unitPrice } = this.state;

        sell(quantityToSell, new Date(), id, name, category, unitPrice);

        this.setState((prevState) => ({

            quantityToSell: 0,
            quantityInStock: prevState.quantityInStock - quantityToSell
        }))
    }

    handleAddtoSell = () => {

        this.setState((prevState) => ({

            quantityToSell: prevState.quantityToSell + 1,
            changeDetected: true,

        }))
    }

    handleRemoveFromSell = () => {

        this.setState((prevState) => ({

            quantityToSell: prevState.quantityToSell - 1,
            changeDetected: true,

        }))
    }

    render() {

        const { id, name, category, unitPrice } = this.props.product;

        const { quantityToSell, quantityInStock, changeDetected } = this.state;

        return (

            <div className="product-sell">

                <p><span>Id: </span><span>{id}</span></p>
                <p><span>name: </span><span>{name}</span></p>
                <p><span>Category: </span><span>{category}</span></p>
                <p><span>Unit Price: </span><span>{unitPrice}</span></p>
                <p><span>Quantity in Stock: </span><span>{quantityInStock}</span></p>

                <p>
                    <label htmlFor="">Quantity</label>
                    <button disabled={quantityToSell === 0} onClick={this.handleRemoveFromSell}>-</button>
                    <span style={quantityToSell === 0 ? { opacity: 0.3 } : {}}>{quantityToSell}</span>
                    <button disabled={quantityToSell === quantityInStock} onClick={this.handleAddtoSell}>+</button>
                </p>

                <p>
                    <button disabled={!changeDetected || quantityToSell === 0} onClick={this.handleSell}>Sell product</button>
                </p>

            </div>
        );
    }
}

export default SellProduct;