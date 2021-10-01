import React from 'react';
import { useSelector } from 'react-redux';
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
    height: auto;
    color: #333;
    letter-spacing: 0;
    width: 560px;
    height: 232px;
`;

const MarketSelectProductListContainer = () => {
    const { input, selectProducts } = useSelector(
        ({ productDetailSelect }) => ({
            input: productDetailSelect.input,
            selectProducts: productDetailSelect.selectProducts,
        }),
    );
    const [onChangeInput, onInsert, onRemove, onDecrease, onIncrease] =
        useActions([changeInput, insert, remove, decrease, increase], []);
    return (
        <MarketSelectProductListContainerBlock>
            <MarketGoodsInsertComponent
                selectProducts={selectProducts}
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
        </MarketSelectProductListContainerBlock>
    );
};

export default MarketSelectProductListContainer;
