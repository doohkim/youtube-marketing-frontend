import React from 'react';
import styled from 'styled-components';
import MarketSelectedProductItemComponent from './MarketSelectedProductItemComponent';

const MarketGoodsSelectedProductListComponentWrap = styled.div`
    width: 560px;
    height: auto;
    max-height: 90px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const MarketGoodsSelectedProductListComponent = ({
    selectProducts,
    onRemove,
    onDecrease,
    onIncrease,
}) => {
    return (
        <MarketGoodsSelectedProductListComponentWrap>
            {selectProducts.map((product) => (
                <MarketSelectedProductItemComponent
                    product={product}
                    key={product.id}
                    onRemove={onRemove}
                    onDecrease={onDecrease}
                    onIncrease={onIncrease}
                />
            ))}
        </MarketGoodsSelectedProductListComponentWrap>
    );
};

export default MarketGoodsSelectedProductListComponent;
