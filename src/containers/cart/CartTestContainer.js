import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import Cart from '../../components/cart/Cart';
import {
    decrease,
    getCartTest,
    increase,
    remove,
    toggle,
} from '../../modules/cartTest';
import ShippingContainer from '../shipping/ShippingContainer';
const CartContainerBlock = styled.div`
    width: 1080px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    .content {
        display: flex;
    }
    .tit_page {
        text-align: center;
    }
`;
const CartTestContainer = () => {
    const dispatch = useDispatch();

    const { cartTest, cartError, loading, user } = useSelector(
        ({ cartTest, loading, user }) => ({
            cartTest: cartTest.cartTest,
            cartError: cartTest.cartError,
            loading: loading['cartTest/GET_CART'],
            user: user.user,
        }),
    );
    useEffect(() => {
        dispatch(getCartTest());
    }, [dispatch]);

    return (
        <CartContainerBlock>
            <div className="tit_page">
                <h2 className="tit">장바구니</h2>
            </div>
            <div className="content">
                <Cart
                    loading={loading}
                    error={cartError}
                    cart={cartTest}
                    increase={increase}
                    decrease={decrease}
                    toggle={toggle}
                    remove={remove}
                    user={user}
                />
                <ShippingContainer
                    cartData={cartTest}
                    loading={loading}
                    user={user}
                />
            </div>
        </CartContainerBlock>
    );
};
export default withRouter(CartTestContainer);
