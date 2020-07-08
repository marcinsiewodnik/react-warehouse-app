import Warehouse from "../data/Warehouse"

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'
import Page from './Page'
import Footer from './Footer'

import '../styles/App.sass';

class App extends React.Component {

  // Model -> our data

  warehouse = new Warehouse();

  // application state

  state = {

    products: []

  }

  // Lifecycle method

  componentDidMount() {

    this.updateState();
  }

  // Method with setState() inside -> it invokes rendering

  updateState() {

    this.setState((prevState) => {

      return { products: [...this.warehouse.products] }

    })
  }

  // Methods for managing the state

  addProduct = (id, name, category, quantity, unitPrice) => {

    const added = this.warehouse.add(id, name, category, quantity, unitPrice);

    if (added) {

      this.updateState();

    } else {

      alert("Invalid input");
    }

  }

  sellProduct = (id, quantity) => {

    const sold = this.warehouse.sell(id, quantity);

    if (sold) {

      this.updateState();

    } else {

      alert("Invalid input")
    }
  }

  changeQuantity = (id, quantity) => {

    const changed = this.warehouse.changeQuantity(id, quantity);

    if (changed) {

      this.updateState();

    } else {

      alert("Invalid input");
    }
  }

  render() {

    return (

      <Router basename={process.env.PUBLIC_URL}>

        <div className="app">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">{<Page products={this.state.products} />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>

      </Router>
    );
  }
}

export default App;
