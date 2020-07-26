import React from 'react';

class Product extends React.Component {

    constructor(props) {

        super(props);
        const { product } = props;

        this.state = {

            id: product.id,
            name: product.name,
            category: product.category,
            quantityInStock: product.quantityInStock,
            unitPrice: product.unitPrice,

            initialName: product.name,
            initialCategory: product.category,
            initialPrice: product.unitPrice,
            initialQuantity: product.quantityInStock,

            changeNameDetected: false,
            changeCategoryDetected: false,
            changePriceDetected: false,
            changeQuantityDetected: false,

            validation: {

                incorrectName: false
            }
        }
    }

    handleChange = (e) => {

        // name and category

        const name = e.target.name;
        const value = e.target.value;

        this.setState((prevState) => {

            return ({

                [name]: value,
            })
        })

        if (name === "name") {

            this.setState((prevState) => {

                if (prevState.name === prevState.initialName) {

                    return ({

                        changeNameDetected: false,
                    })

                } else {

                    return ({

                        changeNameDetected: true,
                    })
                }
            })

            if (value.trim().length < 5) {

                this.setState((prevState) => {

                    return ({

                        validation: { incorrectName: true }
                    })
                })

            } else {

                this.setState((prevState) => {

                    return ({

                        validation: { incorrectName: false }
                    })

                })
            }
        } else if (name === "category") {

            this.setState((prevState) => {

                if (prevState.category === prevState.initialCategory) {

                    return ({

                        changeCategoryDetected: false,

                    })

                } else {

                    return ({

                        changeCategoryDetected: true,
                    })
                }
            })

        }
    }

    handleClick = (e) => {

        const { id, name, category, unitPrice } = this.state;
        const { changeProduct, add } = this.props;

        changeProduct(id, name, category, unitPrice);

        if (this.state.changeQuantityDetected) {

            const amountAdded = this.state.quantityInStock - this.state.initialQuantity;

            console.log(amountAdded, id, name, category, unitPrice);

            add(amountAdded, new Date(), id, name, category, unitPrice)
        }

        this.setState((prevState) => ({

            changeNameDetected: false,
            changeCategoryDetected: false,
            changePriceDetected: false,
            changeQuantityDetected: false,

        }))

        this.setState((prevState) => ({

            validation: { incorrectName: false }
        }))
    }

    handleRemoveProduct = () => {

        this.setState((prevState) => ({

            quantityInStock: prevState.quantityInStock - 1,
        }))

        this.setState((prevState) => ({

            changeQuantityDetected: prevState.quantityInStock !== prevState.initialQuantity
        }))
    }

    handleAddProduct = () => {

        this.setState((prevState) => ({

            quantityInStock: prevState.quantityInStock + 1,
        }))

        this.setState((prevState) => ({

            changeQuantityDetected: prevState.quantityInStock !== prevState.initialQuantity
        }))
    }

    handleIncreasePrice = (e) => {

        this.setState((prevState) => ({

            unitPrice: prevState.unitPrice + 1,

        }))

        this.setState((prevState) => ({

            changePriceDetected: prevState.unitPrice !== prevState.initialPrice
        }))
    }

    handleDecreasePrice = () => {

        this.setState((prevState) => ({

            unitPrice: prevState.unitPrice - 1,

        }))

        this.setState((prevState) => ({

            changePriceDetected: prevState.unitPrice !== prevState.initialPrice
        }))

    }

    render() {

        const { id, name, category, quantityInStock, initialQuantity, unitPrice, validation } = this.state;
        const { incorrectName } = validation;


        const { changeNameDetected, changeCategoryDetected, changePriceDetected, changeQuantityDetected } = this.state;
        const changeDetected = changeNameDetected || changeCategoryDetected || changePriceDetected || changeQuantityDetected;

        return (

            <div className="product">

                <p> <span>Id: </span> <span>{id}</span>  </p>
                <p>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                    {this.state.validation.incorrectName && <span>Name has to be at least 5 characters long.</span>}
                </p>

                <p>
                    <label htmlFor="">Category</label>
                    <select type="checkbox" name="category" value={category} onChange={this.handleChange}>

                        <option value="fruits">fruits</option>
                        <option value="sweets">sweets</option>
                        <option value="drinks">drinks</option>
                        <option value="dairy">dairy</option>
                        <option value="other">other</option>

                    </select>
                </p>

                <p>
                    <label htmlFor="">Price</label>
                    <button disabled={unitPrice === 0} onClick={this.handleDecreasePrice}>-</button>
                    <span style={unitPrice < 0 ? { opacity: 0.3 } : {}}>{unitPrice}</span>
                    <button onClick={this.handleIncreasePrice}>+</button>
                </p>

                <p>

                    <label htmlFor="">Quantity</label>
                    <button disabled={quantityInStock === initialQuantity} onClick={this.handleRemoveProduct}>-</button>
                    <span style={quantityInStock <= initialQuantity ? { opacity: 0.3 } : {}}>{quantityInStock}</span>
                    <button onClick={this.handleAddProduct}>+</button>

                </p>

                <p className="p-button">

                    <button disabled={(!changeDetected) || incorrectName} onClick={this.handleClick}>Save changes</button>

                </p>

            </div>

        );
    }
}

export default Product;