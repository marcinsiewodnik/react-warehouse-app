import React from 'react';

class AddNewProduct extends React.Component {

    state = {

        name: '',
        category: 'fruits',
        unitPrice: 0,
        changeNameDetected: false,

        validation: {

            incorrectName: true,
        }

    }

    handleChange = (e) => {

        // Name and category -> one method

        const name = e.target.name;
        const value = e.target.value;

        this.setState({

            [name]: value,
        })

        if (name === "name") {

            if (value.trim().length < 5) {

                this.setState((prevState) => ({

                    validation: { incorrectName: true },
                }))

            } else {

                this.setState(() => ({

                    validation: { incorrectName: false },
                }))
            }

            this.setState(() => ({

                changeNameDetected: true
            }))
        }
    }

    handleIncreasePrice = () => {

        this.setState({

            unitPrice: this.state.unitPrice + 1,
        })
    }

    handleDecreasePrice = () => {

        this.setState({

            unitPrice: this.state.unitPrice - 1,
        })
    }

    handleSubmit = (e) => {

        const { name, category, unitPrice } = this.state;
        const { addNewProduct } = this.props;

        addNewProduct(name, category, unitPrice);

        // After submitting -> clear the values

        this.setState((prevState) => ({

            name: '',
            category: "fruits",
            unitPrice: 0,
            changeNameDetected: false,

            validation: {
                incorrectName: false,
            }
        }))
    }

    render() {

        const { unitPrice, category, validation, changeNameDetected } = this.state;

        const { incorrectName } = validation;

        return (

            <div className="add-new-product">

                <h2>Add new product</h2>

                <div className="form">

                    <p>
                        <label htmlFor="name">Name: </label>
                        <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />

                    </p>

                    {this.state.validation.incorrectName && changeNameDetected &&

                        <p className="p-error"><span></span><span>Name has to be at least 5 characters long.</span></p>

                    }


                    <p>
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" value={category} onChange={this.handleChange}>

                            <option value="fruits">fruits</option>
                            <option value="sweets">sweets</option>
                            <option value="drinks">drinks</option>
                            <option value="dairy">dairy</option>
                            <option value="other">other</option>

                        </select>
                    </p>

                    <p>
                        <label htmlFor="">Price</label>

                        <p className="price-wrapper">
                            <button disabled={unitPrice === 0} onClick={this.handleDecreasePrice}>-</button>
                            <span style={unitPrice < 0 ? { opacity: 0.3 } : {}}>{unitPrice}</span>
                            <button onClick={this.handleIncreasePrice}>+</button>
                        </p>

                    </p>

                    <p className="p-button">

                        <button disabled={incorrectName} onClick={this.handleSubmit} type="submit">Add product</button>
                    </p>

                </div>

            </div>
        );
    }
}

export default AddNewProduct;