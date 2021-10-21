import React from 'react';
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
    font-family: noto sans;
    min-height: 0px;
    max-height: 150px;
    color: #333;
    letter-spacing: 0;
    width: 560px;
    height: auto;
`;

const MarketSelectProductListContainer = ({ products, history }) => {
    const { input, selectProducts } = useSelector(
        ({ productDetailSelect }) => ({
            input: productDetailSelect.input,
            selectProducts: productDetailSelect.selectProducts,
        }),
    );
    const [onChangeInput, onInsert, onRemove, onDecrease, onIncrease] =
        useActions([changeInput, insert, remove, decrease, increase], []);
    const onClick = () => {
        sessionStorage.setItem('cart', JSON.stringify(selectProducts));
        if (window.confirm('장바구니 고?')) {
            history.push('/cart');
        } else {
            history.push('/search/market');
        }
    };
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
            <button onClick={onClick}>장바구니 테스트</button>
        </MarketSelectProductListContainerBlock>
    );
};

export default withRouter(MarketSelectProductListContainer);
