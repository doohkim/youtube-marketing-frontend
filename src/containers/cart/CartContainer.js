import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CartListComponent from '../../components/cart/CartListComponent';
import { getCart } from '../../modules/cart';

const CartContainerBlock = styled.div`
    width: 1080px;
    height: auto;
    .tit_page {
        text-align: center;

        .tit {
        }
    }
`;

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cart, cartError, loading } = useSelector(({ cart, loading }) => ({
        cart: cart.cart,
        cartError: cart.cartError,
        loading: loading['cart/GET_CART'],
    }));
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);
    return (
        <CartContainerBlock>
            <div className="tit_page">
                <h2 className="tit">장바구니</h2>
            </div>
            <CartListComponent
                cartData={cart}
                cartError={cartError}
                loading={loading}
            />
        </CartContainerBlock>
    );
};

export default CartContainer;
