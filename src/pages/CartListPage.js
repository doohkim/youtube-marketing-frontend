import React from 'react';
import Responsive from '../components/common/Responsive';
import CartTestContainer from '../containers/cart/CartTestContainer';
import Header from '../containers/Header';

const CartListPage = () => {
    return (
        <div>
            <Header />
            <Responsive>
                <CartTestContainer />
            </Responsive>
        </div>
    );
};
export default CartListPage;
