import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Description from "../pages/Description.js"
import ProductListView from "../pages/ProductListView.js"
import TransationListView from "../pages/TransactionListView";
import AddNewProduct from "../pages/AddNewProduct";
import SellProductList from "../pages/SellProductList";
import ProductList from "../pages/ProducList.js";

const Page = ({ products, transactions, addNewProduct, add, sell, changeProduct }) => {

    return (

        <div className="page">

            <Switch>

                <Route path="/" exact={true} component={Description} />

                <Route path="/product-list-view" render={(props) => (

                    // View mode -> we can only see the products, we cannot change them

                    <ProductListView {...props} products={products} />
                )} />

                <Route path="/transaction-list-view" render={(props) => (

                    // We can't change transactions at all

                    <TransationListView {...props} transactions={transactions} />
                )} />

                <Route path="/add-new-product" render={(props) => (

                    <AddNewProduct {...props} products={products} addNewProduct={addNewProduct} />
                )} />

                <Route path="/sell-product-list" render={(props) => (

                    // To sell a given product we need information about the available quantity in stock
                    // If we sell a given product a sell transaction will be generated

                    <SellProductList {...props} products={products} sell={sell} />

                )} />

                <Route path="/product-list" render={(props) => (

                    // If we increase the quantity -> an add transaction will be generated

                    <ProductList {...props} products={products} changeProduct={changeProduct} add={add} />
                )} />

            </Switch>

        </div>
    );
}

export default Page;