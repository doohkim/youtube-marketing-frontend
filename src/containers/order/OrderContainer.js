import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OrderListComponent from '../../components/order/OrderListComponent';
import { withRouter } from 'react-router-dom';
import {
    createOrder,
    getCartFilter,
    notSuccessedPayment,
} from '../../modules/order';
import PaymentContainer from '../payment/PaymentContainer';
import Button from '../../components/common/Button';
import Footer from '../../components/common/Footer';
import palette from '../../lib/styles/palette';
import { changeField } from '../../modules/payment';

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
            .address-index {
                border-bottom: 1px solid #f4f4f4;

                h3 {
                    float: left;
                    width: 190px;
                    font-weight: bold;
                    font-size: 14px;
                    color: #333;
                    line-height: 24px;
                    letter-spacing: -0.32px;
                }
                .section_full {
                    overflow: hidden;
                    padding: 19px 20px 20px 0;

                    .addr {
                        display: block;
                        font-size: 14px;
                        color: #333;
                        line-height: 24px;
                    }
                }
            }
        }
    }
    .tit_page {
        text-align: center;
    }
`;
const ButtonDisabled = styled(Button)`
    width: 352px;
    height: 68px;
    text-align: center;
    background: ${palette.gray[8]};
    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1rem;
    display: block;
    font-weight: 700;
    font-size: 18px;
    border-radius: 3px;
    border: 0 none;
    position: relative;
`;
const ButtonWithMarginTop = styled(Button)`
    width: 320px;
    height: 43px;
    text-align: center;

    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1rem;
    display: block;
    font-weight: 700;
    font-size: 18px;
    border-radius: 3px;
    border: 0 none;
    position: relative;
    padding-top: 21px;
`;

const CenterBlock = styled.div`
    width: 1080px;
    height: 148px;
    img {
        width: 100%;
        height: auto;
    }
    margin-top: 3rem;
    margin-bottom: 1rem;
`;

const OrderContainer = ({ history }) => {
    const [agree, setAgree] = useState(false);
    const [address, setAddress] = useState(null);
    const dispatch = useDispatch();
    // 로그인 되어있어야만 주문이 가능하도록 하기
    const {
        payment,
        order,
        orderError,
        getCartLoading,
        createOrderLoading,
        user,
    } = useSelector(({ payment, order, loading, user }) => ({
        order: order.order,
        orderError: order.orderError,
        getCartLoading: loading['order/GET_CART_FILTER'],
        createOrderLoading: loading['order/GET_ORDERS'],
        user: user.user,
        payment: payment,
    }));
    const getTotalAmount = (numbers) => {
        if (numbers.length === 0) return 0;
        let sum = numbers.reduce((acc, cur, i) => {
            return acc + cur.price * cur.number;
        }, 0);
        if (sum < 30000) {
            sum = sum + 3000;
        }
        return sum;
    };
    const onDisabledClick = useCallback(() => {
        window.alert('결제 진행을 위해 결제 진행 필수 동의에 체크해주세요');
    });

    const onChangeField = useCallback(
        (payload) => dispatch(changeField(payload)),
        [dispatch],
    );
    const onClick = useCallback((order) => {
        const order_items = JSON.stringify(order);
        const ordered_amount = getTotalAmount(order);

        // payment.order_number = 'PAYGO' + new Date().getTime();
        const { IMP } = window;
        IMP.init('imp63703486');

        const data = {
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name: order_items,
            amount: ordered_amount,
            custom_data: {
                name: '부가정보',
                desc: '세부 부가 정보',
            },
            buyer_name: user.user.username,
            buyer_tel: '01040116804',
            buyer_email: user.user.email,
            buyer_addr: address,
            buyer_postalcode: '우편번호',
        };
        IMP.request_pay(data, callback);
    }, []);

    const callback = (response) => {
        console.log(response);
        if (response.success) {
            alert('결제 성공');
            dispatch(
                createOrder({
                    response,
                }),
            );
            const cartdata = JSON.parse(sessionStorage.getItem('cart')).filter(
                (cart_item) => cart_item.checked === false,
            );
            console.log(cartdata, '결제 후 필터링 한값');
            sessionStorage.setItem('cart', JSON.stringify(cartdata));
        } else {
            const errorMsagge = response.error_msg;
            console.log(errorMsagge);
            alert(`결제 실패 : ${errorMsagge}`);
            // dispatch(notSuccessedPayment({ response }));
            history.push('/order');
        }
    };
    useEffect(() => {
        console.log('useeffect', order);
        if (user) {
            dispatch(getCartFilter());
            setAddress(user.user.user_addresses[0].address);
        } else {
            setAddress(null);
            history.push('/login');
        }

        const jquery = document.createElement('script');
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, [dispatch, user]);

    return (
        <OrderContainerBlock>
            <div className="tit_page">
                <h2 className="tit">주 문 서</h2>
            </div>

            <div className="content">
                <div className="order_product_list">
                    <div className="sub_tit">주문 상품</div>
                    <OrderListComponent
                        order={order}
                        orderError={orderError}
                        loading={getCartLoading}
                    />
                </div>
                <div className="order_user_info">
                    <div className="sub_tit">주문자 정보</div>
                    <table className="userinfo_table">
                        {!getCartLoading && user && (
                            <tbody>
                                <tr className="fst">
                                    <th>보내는 분</th>
                                    <td>{user.user.username}</td>
                                    <th>휴대폰</th>
                                    <td>{user.user.phonenumber}</td>
                                    <th>이메일</th>
                                    <td>{user.user.email}</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>

                <div className="shipping_user_info">
                    <h2 className="sub_tit">배송 정보</h2>
                    <div className="address-index">
                        <h3>배송지</h3>
                        <div className="section_full">
                            {!getCartLoading && user && (
                                <span className="addr">{address}</span>
                            )}
                        </div>
                    </div>
                    <div className="address-index">
                        <h3>배송지 상세정보</h3>
                        <div className="section_full">
                            {!getCartLoading && user && (
                                <span className="addr">{address}</span>
                            )}
                        </div>
                    </div>
                </div>
                <CenterBlock>
                    <img
                        src="https://res.kurly.com/kurly/img/2021/banner-order-paper_1050_107%402x.jpg"
                        alt=""
                    />
                </CenterBlock>
                <PaymentContainer
                    onChangeField={onChangeField}
                    setAgree={setAgree}
                    agree={agree}
                    order={order}
                    loading={getCartLoading}
                    orderError={orderError}
                    getTotalAmount={getTotalAmount}
                />
            </div>
            {order && agree ? (
                <ButtonWithMarginTop
                    to="/payment"
                    onClick={() => onClick(order)}
                    // onClick={onClickPayment}
                >
                    {`${getTotalAmount(order)}원 결제하기`}
                </ButtonWithMarginTop>
            ) : (
                <ButtonDisabled onClick={onDisabledClick}>
                    {`동의하기 버튼을 눌러주세요`}
                </ButtonDisabled>
            )}
            <Footer />
        </OrderContainerBlock>
    );
};

export default withRouter(OrderContainer);
