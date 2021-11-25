import React from 'react';
import styled from 'styled-components';

const OrderListComponentBlock = styled.form`
    width: 1080px;
    display: flex;
    /* align-items: center;
    justify-content: center; */
`;

const OrderListErrorBlock = styled.div`
    width: 1080px;
    background: gray;
`;
const OrderItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 1080px;
    display: flex;
    /* 맨 위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid gray;
    }

    .img_wrap {
        width: 105px;
        height: 110px;
        img {
            width: 100%;
            height: auto;
        }
    }
    .product_info_wrap {
        display: flex;
        margin-left: 3rem;
        margin-top: 2rem;
        .product_name {
            width: 327px;
            overflow: hidden;
            max-height: 54px;
            font-weight: 700;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
        }
        .counter_wrap {
            display: flex;
            width: 90px;
            height: 28px;
            .number {
                width: 28px;
                height: 28px;
                text-align: center;
            }
        }
        .price {
            width: 116px;
        }
    }
`;
const OrderItem = ({ OrderItem }) => {
    const { number, text, id } = OrderItem;
    const price = 2900;
    return (
        <OrderItemBlock>
            <div className="img_wrap">
                <img
                    src="https://img-cf.kurly.com/shop/data/goods/1580273855720i0.jpg"
                    alt=""
                />
            </div>

            <div className="product_info_wrap">
                <div className="product_name">{text}</div>
                <div className="counter_wrap">
                    <div className="number">{number} 개</div>
                </div>
                <div className="price">{price} 원</div>
            </div>
        </OrderItemBlock>
    );
};
const OrderListComponent = ({ order, orderError, loading }) => {
    if (orderError) {
        return <OrderListErrorBlock>에러가 발생했습니다.</OrderListErrorBlock>;
    }
    return (
        <OrderListComponentBlock>
            {!loading && order && (
                <div className="cart_item">
                    {order.map((cart) => (
                        <OrderItem OrderItem={cart} key={cart.id} />
                    ))}
                </div>
            )}
        </OrderListComponentBlock>
    );
};

export default OrderListComponent;
