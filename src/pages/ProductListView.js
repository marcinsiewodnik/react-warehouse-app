import React from 'react';
import ProductView from '../components/ProductView';

const ProductListView = ({ products }) => {

    products = products.map(product => <ProductView key={product.id} product={product} />)

    return (

        <div>

            <h2>Products</h2>

            <div>

                {products}

            </div>

        </div>
    );

}

export default ProductListView;