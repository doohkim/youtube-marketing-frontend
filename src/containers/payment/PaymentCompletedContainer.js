import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import { getOrder, unloadPaymentOrder } from '../../modules/order';

const PaymentCompletedContainerBlock = styled.div`
    width: 1080px;
    height: 720px;
    background: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    .tit_page {
        text-align: center;
    }
    .btn_wrap {
        display: flex;
        flex-direction: column;
    }
`;
const NextStepBtn = styled(Button)`
    width: 80%;
    height: 36px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
`;

const PaymentCompletedContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { order, payedOrder, payedOrderError, loading, user } = useSelector(
        ({ order, user, loading }) => ({
            order: order.order,
            payedOrder: order.payedOrder,
            payedOrderError: order.payedOrderError,
            loading: loading['order/CREATE_ORDER'],
            user: user.user,
        }),
    );
    const onDetailStepClick = useCallback((id) => {
        dispatch(unloadPaymentOrder());
        history.push(`/mypage/order/${id}`);
    });
    const onMarketStepClick = useCallback(() => {
        dispatch(unloadPaymentOrder());
        history.push(`/search/market`);
    });
    const onErrorStepClick = useCallback(() => {
        history.push(`/list`);
    });
    console.log('useEffect 전 payedOrder', payedOrder);
    useEffect(() => {
        console.log('useEffect 안 payedorder', payedOrder);
        console.log('useEffect 안 user', user);
        console.log('useEffect 안 loading', loading);

        if (user) {
            console.log(payedOrder);
            console.log(order);
            if (payedOrder === null && order === null) {
                alert('잘못된 접근입니다.');
                history.push('/search/market');
            }
        }

        return () => {
            console.log('useEffect => return payedorder', payedOrder);
            console.log('useEffect => return user', user);
            console.log('useEffect => return loading', loading);
            console.log('useEffect => return payedorder', payedOrderError);
        };
    }, [dispatch, history, user]);

    if (payedOrder === null && payedOrderError === null) {
        return (
            <PaymentCompletedContainerBlock>
                <div className="tit_page">
                    <h2 className="tit">결제 하기</h2>
                </div>
                <div>결제 진행 중입니다.</div>
            </PaymentCompletedContainerBlock>
        );
    }

    if (payedOrderError) {
        return (
            <PaymentCompletedContainerBlock>
                <div className="tit_page">
                    <h2 className="tit">주 문 실 패</h2>
                </div>
                <div className="btn_wrap">
                    <NextStepBtn onClick={() => onErrorStepClick()}>
                        장바구니 페이지로 이동
                    </NextStepBtn>
                </div>
            </PaymentCompletedContainerBlock>
        );
    }
    return (
        <PaymentCompletedContainerBlock>
            <div className="tit_page">
                <h2 className="tit">주 문 서</h2>
            </div>
            <div className="tit_page">
                <p>{user && user.user.username}님 주문이 완료되었습니다!</p>
            </div>
            <div className="tit_page">
                <ul>
                    <li>
                        <span>결제 금액</span>
                        {payedOrder && (
                            <span>{parseInt(payedOrder.paid_amount)}원</span>
                        )}
                    </li>
                </ul>
            </div>
            <div className="btn_wrap">
                <NextStepBtn onClick={() => onDetailStepClick(payedOrder.id)}>
                    주문 상세보기
                </NextStepBtn>
                <NextStepBtn onClick={() => onMarketStepClick()}>
                    쇼핑 계속하기
                </NextStepBtn>
            </div>
        </PaymentCompletedContainerBlock>
    );
};

export default withRouter(PaymentCompletedContainer);
