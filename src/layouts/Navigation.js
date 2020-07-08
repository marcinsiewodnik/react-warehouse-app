import React from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/Navigation.sass"

// using list -> this code will be easier to maintain

const list = [

    { name: "description", path: "/", exact: true },
    { name: "warehouse state", path: "/warehouse-state", exact: true },
    { name: "sold products", path: "/sold", exact: true },
    { name: "add product", path: "/add", exact: true },
    { name: "sell product", path: "/sell", exact: true },
    { name: "statistics", path: "/stats", exact: true },

]

const Navigation = () => {

    const menu = list.map(item => {

        return (

            <li key={item.name}>

                <NavLink to={item.path}>{item.name}</NavLink>

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