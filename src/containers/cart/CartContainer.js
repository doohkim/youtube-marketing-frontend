import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CartListComponent from '../../components/cart/CartListComponent';
import { getCart } from '../../modules/cart';
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
    console.log(cart);
    return (
        <CartContainerBlock>
            <div className="tit_page">
                <h2 className="tit">장바구니</h2>
            </div>
            <div className="content">
                <CartListComponent
                    cartData={JSON.parse(cart)}
                    cartError={cartError}
                    loading={loading}
                />
                <ShippingContainer />
            </div>
        </CartContainerBlock>
    );
};

export default CartContainer;
