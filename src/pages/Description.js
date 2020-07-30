import React from 'react';

const Description = () => {

    return (

        <div >

            <h2>Description</h2>

            <div className="description">

                <p>Functionality: </p>

                <p>On the product list (view mode) tab you can see all the products in the system. </p>
                <p>On the transaction list(view mode) tab you can see all the transactions that took place. </p>
                <p>On the add new product (change mode) tab you can add a new product to the system.</p>
                <p>On the sell product (change mode) tab you can sell a given product. A sell transaction will be generated.</p>
                <p>On the product list (change mode) tab you can modify existing products. Especially you can increase the quantity in stock. Then an add transaction will be generated.</p>


            </div>

        </div>
    );

}

export default Description;