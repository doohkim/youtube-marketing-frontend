import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import MarketGoodsInsertComponent from '../../../components/detail/market/MarketGoodsInsertComponent';
import MarketGoodsSelectedProductListComponent from '../../../components/detail/market/MarketGoodsSelectedProductListComponent';
import useActions from '../../../lib/useActions';
import {
    changeInput,
    insert,
    remove,
    decrease,
    increase,
} from '../../../modules/productDetailSelect';
const MarketSelectProductListContainerBlock = styled.div`
    /* font-family: noto sans; */
    min-height: 0px;
    max-height: 150px;
    color: #333;
    letter-spacing: 0;
    width: 560px;
    height: auto;
    .cartPut {
        background: #8b00ff;
        display: block;
        font-size: 16px;
        line-height: 52px;
        letter-spacing: -0.1px;
        text-align: center;
        width: 560px;
        height: 56px;
        color: white;
        padding-bottom: 2px;
        margin-top: 1.5rem;
    }
`;

const MarketSelectProductListContainer = ({ products, history }) => {
    const [cartList, setCartList] = useState([]);
    const { input, selectProducts } = useSelector(
        ({ productDetailSelect }) => ({
            input: productDetailSelect.input,
            selectProducts: productDetailSelect.selectProducts,
        }),
    );

    const [onChangeInput, onInsert, onRemove, onDecrease, onIncrease] =
        useActions([changeInput, insert, remove, decrease, increase], []);

    const onClick = useCallback(() => {
        let cart_db = [];
        let new_cart = [];
        let overlap_list = [];

        if (cartList.length >= 0 && selectProducts.length === 0) {
            console.log('카트 변경 없음');
            // sessionStorage.setItem('cart', JSON.stringify(cartList));
        } else if (cartList.length === 0) {
            sessionStorage.setItem('cart', JSON.stringify(selectProducts));
        } else {
            cartList.map((cart_item) => {
                selectProducts.map((select_item) => {
                    if (select_item.id === cart_item.id) {
                        console.log(cart_item);
                        new_cart.push({
                            ...cart_item,
                            number: cart_item.number + select_item.number,
                        });
                        overlap_list.push(select_item.id);
                    }
                });
            });
            console.log('중복 데이터', new_cart);
            console.log('중복 리스트 아이디', overlap_list);
            if (overlap_list.length !== 0) {
                console.log('세션저장소에서 가져온 데이터 - 중복 제거');
                // 마지막 코드
                cartList.map((cart_item) => {
                    if (overlap_list.includes(cart_item.id)) {
                        console.log('중복', cart_item.text);
                    } else {
                        cart_db.push(cart_item);
                    }
                });
                selectProducts.map((select_item) => {
                    if (overlap_list.includes(select_item.id)) {
                        console.log('중복', select_item.text);
                    } else {
                        cart_db.push(select_item);
                    }
                });

                sessionStorage.setItem(
                    'cart',
                    JSON.stringify(cart_db.concat(new_cart)),
                );
            } else {
                console.log('중복이 없음');
                sessionStorage.setItem(
                    'cart',
                    JSON.stringify(cartList.concat(selectProducts)),
                );
            }
        }
        cart_db = [];
        new_cart = [];
        overlap_list = [];
        if (window.confirm('장바구니 고?')) {
            history.push('/list');
        } else {
            history.push(`/search/market/`);
        }
    }, [selectProducts, cartList]);

    useEffect(() => {
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        if (cart) {
            setCartList(cart);
        }
    }, [setCartList]);
    return (
        <MarketSelectProductListContainerBlock>
            <MarketGoodsInsertComponent
                products={products}
                onInsert={onInsert}
                input={input}
                onChangeInput={onChangeInput}
            />
            <MarketGoodsSelectedProductListComponent
                selectProducts={selectProducts}
                onRemove={onRemove}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
            />
            <button className="cartPut" onClick={onClick}>
                장바구니 담기
            </button>
        </MarketSelectProductListContainerBlock>
    );
};

export default withRouter(MarketSelectProductListContainer);
