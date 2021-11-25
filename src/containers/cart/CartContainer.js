import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CartListComponent from '../../components/cart/CartListComponent';
import { withRouter } from 'react-router';

import ShippingContainer from '../shipping/ShippingContainer';
import {
    decrease,
    getCart,
    increase,
    remove,
    toggle,
} from '../../modules/cart';

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

        .tit {
        }
    }
`;

const CartContainer = () => {
    // const [cartList, setCartList] = useState([]);
    const dispatch = useDispatch();

    const { cart, cartError, loading, user } = useSelector(
        ({ cart, loading, user }) => ({
            cart: cart.cart,
            cartError: cart.cartError,
            loading: loading['cart/GET_CART'],
            user: user.user,
        }),
    );

    const onIncrease = useCallback((id) => dispatch(increase(id)), [dispatch]);
    const onDecrease = useCallback((id) => dispatch(decrease(id)), [dispatch]);
    const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

    // useEffect(() => {
    //     if (cart) return;
    //     onGetCart();
    //     const session_cart_items = JSON.parse(sessionStorage.getItem('cart'));
    //     if (session_cart_items) {
    //         console.log('session_cart_items', session_cart_items);
    //         setCartList(session_cart_items);
    //     }
    // }, [cart, onGetCart]);
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);
    return (
        <CartContainerBlock>
            <div className="tit_page">
                <h2 className="tit">장바구니</h2>
            </div>
            <div className="content">
                <CartListComponent
                    onRemove={onRemove}
                    onDecrease={onDecrease}
                    onIncrease={onIncrease}
                    onToggle={onToggle}
                    cartData={cart}
                    cartError={cartError}
                    loading={loading}
                />
                <ShippingContainer
                    cartData={cart}
                    loading={loading}
                    user={user}
                />
            </div>
        </CartContainerBlock>
    );
};

export default withRouter(CartContainer);
