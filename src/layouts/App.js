import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header'
import Navigation from './Navigation'
import Page from './Page'
import Footer from './Footer'

import '../styles/App.sass';

class App extends React.Component {

  state = {

    products: [],
    transactions: [],
  }

  id = {

    nextProductId: 0,
    nextTransactionId: 0,
  }

  generateNextProductId = () => {

    const id = this.id.nextProductId++;

    return id;
  }

  generateNextTransactionId = () => {

    const id = this.id.nextTransactionId++;

    return id;
  }

  // Fetching data

  componentDidMount() {

    const products = this.fetchProducts();
    const transactions = this.fetchTransactions();

    this.setState({ products, transactions })
  }

  fetchProducts = () => {

    return [
      {

        id: this.generateNextProductId(),
        name: 'orange juice',
        category: 'drinks',
        unitPrice: 4,
        quantityInStock: 5

      },

      {
        id: this.generateNextProductId(),
        name: 'cookie',
        category: 'sweets',
        unitPrice: 2,
        quantityInStock: 5

      },

      {

        id: this.generateNextProductId(),
        name: 'apple',
        category: 'fruits',
        unitPrice: 3,
        quantityInStock: 5

      }

    ]

  }

  fetchTransactions = () => {

    return [

      {
        id: this.generateNextTransactionId(),
        type: "add",
        productId: 0,
        productName: "orange juice",
        productCategory: "drinks",
        productUnitPrice: 4,
        quantity: 5,
      },

      {
        id: this.generateNextTransactionId(),
        type: "add",
        productId: 1,
        productName: "cookie",
        productCategory: "sweet",
        productUnitPrice: 2,
        quantity: 5,
      },
      {
        id: this.generateNextTransactionId(),
        type: "add",
        productId: 1,
        productName: "apple",
        productCategory: "fruits",
        productUnitPrice: 3,
        quantity: 5,
      },

    ]


  }

  // Methods for managing the state

  addNewProduct = (name, category, unitPrice, id = this.generateNextProductId()) => {

    // Add a new product, without quantity

    const newProduct = { id, name, category, unitPrice, quantityInStock: 0 }

    this.setState((prevState) => ({ products: prevState.products.concat(newProduct) }));
  }

  add = (transactionQuantity, transactionDate, productId, productName, productCategory, productUnitPrice, transactionId = this.generateNextTransactionId()) => {

    // Add quantity to an existing product

    const newTransaction = { id: transactionId, type: "add", quantity: transactionQuantity, date: transactionDate, productId, productName, productCategory, productUnitPrice }

    this.setState((prevState) => {

      const products = prevState.products.map(product => {

        // Create a new instance

        const newProduct = {

          id: product.id,
          name: product.name,
          category: product.category,
          unitPrice: product.unitPrice,
          quantityInStock: product.quantityInStock,


        }

        // Increase quantity of a given product

        if (product.id === productId) {

          newProduct.quantityInStock += transactionQuantity;

        }

        return newProduct;

      });


      return ({ products, transactions: prevState.transactions.concat(newTransaction) });
    });
  }

  sell = (transactionQuantity, transactionDate, productId, productName, productCategory, productUnitPrice, transactionId = this.generateNextTransactionId()) => {

    // Sell -> decrease quantity of a given product and create a sell transaction

    const newTransaction = { id: transactionId, type: "sell", quantity: transactionQuantity, date: transactionDate, productId, productName, productCategory, productUnitPrice }

    this.setState((prevState) => {

      const products = prevState.products.map(product => {

        if (product.id === productId) {

          product.quantityInStock -= transactionQuantity;
        }

        return product;

      });

      return ({ products, transactions: prevState.transactions.concat(newTransaction) });
    });

  }

  changeProduct = (id, newName, newCategory, newPrice) => {

    this.setState((prevState) => ({

      products: prevState.products.map(product => {

        if (product.id === id) {

          product.name = newName;
          product.category = newCategory;
          product.unitPrice = newPrice;

        }

        return product;
      })
    }))
  }

  // Rendering

  render() {

    // Data flow -> we pass products, transactions, methods to managing the state

    return (

      <Router basename={process.env.PUBLIC_URL}>

        <div className="app">

          <header>{<Header />}</header>

          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">

              {<Page

                products={this.state.products}
                transactions={this.state.transactions}
                addNewProduct={this.addNewProduct}
                add={this.add}
                sell={this.sell}
                changeProduct={this.changeProduct}

              />}

            </section>

          </main>
          <footer>{<Footer />}</footer>
        </div>

      </Router>
    );
  }
}

export default App;
