import React from 'react';
import { NavLink } from 'react-router-dom';

const list = [

    { name: "Description", path: "/", exact: true },
    { name: "product list (view mode)", path: "/product-list-view", exact: false },
    { name: "transaction list (view mode)", path: "/transaction-list-view", exact: false },

    { name: "add new product (change mode)", path: "/add-new-product", exact: false },
    { name: "sell product (change mode)", path: "/sell-product-list", exact: false },
    { name: "product list (change mode)", path: "/product-list", exact: false }

]

const Navigation = () => {

    const menu = list.map(item => {

        return (

            <li key={item.name}>

                <NavLink to={item.path} exact={item.exact ? true : false}>{item.name}</NavLink>

            </li>
        )
    })

    return (

        <nav className="main">

            <ul>
                {menu}
            </ul>

        </nav>
    );
}

export default Navigation;