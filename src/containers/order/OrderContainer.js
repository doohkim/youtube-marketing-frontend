import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OrderListComponent from '../../components/order/OrderListComponent';
import { getCart } from '../../modules/cart';

const OrderContainerBlock = styled.div`
    width: 1080px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    .content {
        width: 1080px;
        .sub_tit {
            padding: 74px 0 16px;
            font-weight: bold;
            font-size: 20px;
            color: #333;
            line-height: 29px;
            clear: both;
            border-bottom: 1px solid black;
            margin-bottom: 1rem;
        }
        .order_user_info {
            .userinfo_table {
                border-bottom: 0 none;
                width: 100%;
                table-layout: fixed;
                border-collapse: collapse;
                border-spacing: 0;
                tr {
                    width: 190px;
                    padding: 8px 0 0;
                    font-weight: bold;
                    font-size: 14px;
                    color: #333;
                    line-height: 24px;
                    letter-spacing: -0.32px;
                    vertical-align: top;
                }
                td {
                    position: relative;
                    padding: 8px 0;
                    font-size: 14px;
                    color: #333;
                    line-height: 24px;
                    vertical-align: top;
                }
            }
        }

        .shipping_user_info {
            width: 1080px;
            /* height: 216px; */
            /* padding: 9px 18px 18px 20px; */
            .amount {
                width: 244px;
                padding-top: 9px;
                overflow: hidden;
                .tit {
                    float: left;
                    font-size: 16px;
                    line-height: 24px;
                    white-space: nowrap;
                    float: left;
                    width: 300px;
                    font-weight: 400;
                    letter-spacing: -0.5px;
                }
                .price {
                    float: left;
                    /* font-family: Noto Sans; */
                    letter-spacing: 0;
                    display: block;
                    line-height: 24px;
                    text-align: right;
                    .num {
                        font-size: 18px;
                    }
                    .won {
                        padding-left: 2px;
                        font-size: 16px;
                        vertical-align: 1px;
                    }
                }
            }
        }
    }
    .tit_page {
        text-align: center;

        .tit {
        }
    }
`;

const OrderContainer = () => {
    const dispatch = useDispatch();
    // 로그인 되어있어야만 주문이 가능하도록 하기
    const { cart, cartError, loading } = useSelector(({ cart, loading }) => ({
        cart: cart.cart,
        cartError: cart.cartError,
        loading: loading['cart/GET_CART'],
    }));
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);
    return (
        <OrderContainerBlock>
            <div className="tit_page">
                <h2 className="tit">주 문 서</h2>
            </div>
            <div className="content">
                <div className="order_product_list">
                    <div className="sub_tit">주문 상품</div>
                    <OrderListComponent
                        cartData={JSON.parse(cart)}
                        cartError={cartError}
                        loading={loading}
                    />
                </div>
                <div className="order_user_info">
                    <div className="sub_tit">주문자 정보</div>
                    <table className="userinfo_table">
                        <tbody>
                            <tr class="fst">
                                <th>보내는 분</th>
                                <td>김도오</td>
                                <th>휴대폰</th>
                                <td>01040116804</td>
                                <th>이메일</th>
                                <td>paygodeveloper@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="shipping_user_info">
                    <div className="sub_tit">배송 정보</div>
                    <dl className="amount">
                        <dt className="tit">배송비</dt>
                        <dd className="price">
                            <span className="num">경기도 광명시 광삼로 27</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </OrderContainerBlock>
    );
};

export default OrderContainer;
