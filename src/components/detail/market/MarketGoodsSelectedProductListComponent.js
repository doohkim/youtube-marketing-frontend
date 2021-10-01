import React from 'react';
import styled from 'styled-components';
import MarketSelectedProductItemComponent from './MarketSelectedProductItemComponent';

const MarketGoodsSelectedProductListComponentWrap = styled.div`
    width: 560px;
    height: 150px;
    overflow: auto;
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
