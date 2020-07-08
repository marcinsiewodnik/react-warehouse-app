import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Description from "../pages/Description.js"
import WarehouseState from "../pages/WarehouseState.js"

import "../styles/Page.sass"

const Page = ({ products }) => {

    return (

        <div className="page">

            <Switch>

                <Route path="/" exact={true} component={Description} />
                <Route path="/warehouse-state" render={(props) => (

                    <WarehouseState {...props} products={products} />
                )} />

            </Switch>

        </div>
    );
}

export default Page;