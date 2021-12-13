import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { GrRadial, GrStatusGoodSmall } from 'react-icons/gr';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '../common/Button';
const CartBlock = styled.div`
    width: 742px;
    padding-top: 3rem;
    background: white;
`;

const CartItemBlock = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
    padding-bottom: 3rem;
    min-height: 128px;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }

    .toggle-img {
        left: 2px;
        top: 50%;
        width: 24px;
        height: auto;
        padding: 0px;
        margin-top: auto;
        margin-bottom: auto;
        img {
            width: 100%;
            height: auto;
        }
    }
    .product-thumbnail {
        overflow: visible;
        padding-top: 0;
        height: auto;
        margin-top: auto;
        margin-bottom: auto;
        img {
            overflow: hidden;
            float: left;
            width: 60px;
            height: 78px;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #f4f4f4;
            font-size: 0;
        }
    }
    .product-info-wrap {
        display: flex;
        width: 327px;
        align-items: center;
        justify-content: center;
        .counter_wrap {
            margin-right: 2rem;
            display: flex;
        }
    }
`;

const CartItem = ({ cartItem, onRemove, onDecrease, onIncrease, onToggle }) => {
    return (
        <CartItemBlock>
            <div className="toggle-img" onClick={() => onToggle(cartItem.id)}>
                {cartItem.checked ? <GrStatusGoodSmall /> : <GrRadial />}
            </div>
            <div className="product-thumbnail">
                <img
                    src="https://img-cf.kurly.com/shop/data/goods/1580273855720i0.jpg"
                    alt=""
                />
            </div>

            <div className="product-info-wrap">
                <div className="counter_wrap">{cartItem.text}</div>
                <div className="counter_wrap">
                    <button onClick={() => onIncrease(cartItem.id)}>+</button>
                    <div className="number">{cartItem.number}</div>
                    <button onClick={() => onDecrease(cartItem.id)}>-</button>
                </div>
                <div className="counter_wrap">{cartItem.price}</div>
            </div>
            <div
                className="product-thumbnail"
                onClick={() => onRemove(cartItem.id)}
            >
                <MdRemoveCircleOutline />
            </div>
        </CartItemBlock>
    );
};
const Cart = ({
    user,
    loading,
    cart,
    error,
    remove,
    decrease,
    toggle,
    increase,
    history,
}) => {
    const dispatch = useDispatch();

    const onIncrease = useCallback(
        (id) => {
            dispatch(increase(id));
        },
        [dispatch],
        cart
            ? sessionStorage.setItem('cart', JSON.stringify(cart))
            : console.log('not cart data'),
    );
    const onDecrease = useCallback(
        (id) => {
            dispatch(decrease(id));
        },
        [dispatch],
        cart
            ? sessionStorage.setItem('cart', JSON.stringify(cart))
            : console.log('not cart data'),
    );
    const onToggle = useCallback(
        (id) => {
            dispatch(toggle(id));
        },
        [dispatch],
        cart
            ? sessionStorage.setItem('cart', JSON.stringify(cart))
            : console.log('not cart data'),
    );
    const onRemove = useCallback(
        (id) => dispatch(remove(id)),
        [dispatch],
        cart
            ? sessionStorage.setItem('cart', JSON.stringify(cart))
            : console.log('not cart data'),
    );
    //useEffect
    useEffect(() => {
        console.log('useeffect', user);
        if (user) {
            console.log('useeffect', error);
            if (error) {
                // console.log(error);
                history.push('/search/market');
            }
        }
    }, [dispatch, history, user]);
    if (error) {
        return (
            <CartBlock>
                <Button to="/search/market">돌아가기</Button>
            </CartBlock>
        );
    }
    if (loading || !cart || cart.length === 0) {
        return <CartBlock>장바구니에 담긴 상품이 없습니다.</CartBlock>;
    }
    return (
        <CartBlock>
            {!loading && cart && (
                <div>
                    {cart.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                            onToggle={onToggle}
                            onRemove={onRemove}
                        />
                    ))}
                </div>
            )}
        </CartBlock>
    );
};
export default withRouter(Cart);
