import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import palette from '../../lib/styles/palette';

const ShippingContainerWrap = styled.div`
    width: 284px;
    height: 553px;
    border: 1px solid ${palette.gray[2]};
    margin-left: 0.5rem;

    .address {
        width: 244px;

        /* background: gray; */
        padding: 23px 19px 20px;
        border: 1px solid #f2f2f2;
        border-bottom: 0;
        .text {
            padding-left: 24px;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.3px;
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: 20px 20px;
            background-position: 0 50%;
        }
        .emph {
            color: #5f0080;
        }
        .close_btn {
            float: right;
            margin-bottom: 0.5rem;
        }
    }
    button {
        margin-top: 17px;
        display: block;
        width: 100%;
        height: 36px;
        font-weight: 700;
        font-size: 12px;
        line-height: 34px;
    }
    .total_price_info {
        /* background: blue; */
        width: 244px;
        height: 216px;
        padding: 9px 18px 18px 20px;
        border: 1px solid #f2f2f2;
        background-color: #fafafa;
        .lst {
            margin: 17px 0 0;
            padding-top: 17px;
            border-top: 1px solid #eee;
        }
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
                width: 80px;
                font-weight: 400;
                letter-spacing: -0.5px;
            }
            .price {
                float: right;
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
`;

const ShippingContainer = ({ cartData, loading, user }) => {
    const [selectedCartItems, setSelectedCartItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isOpenSecondPopup, setIsOpenSecondPopup] = useState(false);
    const [address, setAddress] = useState(null);
    const [postCodes, setPostCodes] = useState(null);
    const [detailAddress, setDetailAddress] = useState('');

    const handleComplete = useCallback(
        (data) => {
            let fullAddress = data.address;
            let extraAddress = '';
            let zoneCodes = data.zonecode;
            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress +=
                        extraAddress !== ''
                            ? `, ${data.buildingName}`
                            : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }
            //fullAddress -> 전체 주소반환
            setAddress(fullAddress);
            setPostCodes(zoneCodes);
            setIsOpenSecondPopup(true);
        },
        [address, postCodes, isOpenSecondPopup],
    );

    const openModal = useCallback(() => {
        setModalVisible(true);
    }, []);
    const closeModal = useCallback(() => {
        setModalVisible(false);
    }, []);

    const onChange = useCallback(
        (e) => {
            setDetailAddress(e.target.value);
        },
        [detailAddress],
    );

    const onClick = useCallback(
        (e) => {
            e.preventDefault();
            setAddress(address + detailAddress);
            setIsOpenSecondPopup(false);
            closeModal(false);
        },
        [closeModal, address, detailAddress, setAddress],
    );
    const onOrder = useCallback(() => {
        if (selectedCartItems.length === 0) {
            window.alert('주문할 상품을 선택해주세요');
        }
    }, [selectedCartItems]);
    const getTotalAmount = (numbers) => {
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, cur, i) => {
            return acc + cur.price * cur.number;
        }, 0);
        return sum;
    };

    useEffect(() => {
        if (user) {
            setAddress(user.user.user_addresses[0].address);
        } else {
            setAddress(null);
        }
        if (cartData) {
            setSelectedCartItems(
                cartData.filter((cart_item) => cart_item.checked === true),
            );
        }
    }, [user, cartData, setAddress, setSelectedCartItems]);
    return (
        <ShippingContainerWrap>
            <div className="address">
                <h3 className="text">배송지</h3>

                {address ? (
                    <div>
                        <div className="text">{address}</div>
                        <button onClick={openModal}>배송지 변경</button>
                    </div>
                ) : (
                    <div>
                        <div className="text">
                            <span className="emph">배송지 입력을하고</span>
                            <br />
                            배송유형을 확인해 보세요!
                        </div>
                        <button onClick={openModal}>주소검색</button>
                    </div>
                )}
                {modalVisible && (
                    <Modal
                        visible={modalVisible}
                        closable={true}
                        maskClosable={true}
                        onClose={closeModal}
                    >
                        <DaumPostcode
                            onComplete={handleComplete}
                            className="post-code"
                            // autoClose
                        />
                        {isOpenSecondPopup && (
                            <div>
                                <h3>상세 주소 입력</h3>
                                <input
                                    placeholder="상세 주소를 입력해 주세요"
                                    onChange={onChange}
                                    value={detailAddress}
                                />
                                <button onClick={onClick}>저장</button>
                            </div>
                        )}
                    </Modal>
                )}
            </div>
            <div className="total_price_info">
                <dl className="amount">
                    <dt className="tit">상품 금액</dt>
                    <dd className="price">
                        {!loading && selectedCartItems ? (
                            <span className="num">
                                {getTotalAmount(selectedCartItems)}
                            </span>
                        ) : (
                            <span className="num">{0}</span>
                        )}

                        <span className="won">원</span>
                    </dd>
                </dl>
                <dl className="amount">
                    <dt className="tit">배송비</dt>
                    <dd className="price">
                        <span className="num">3000</span>
                        <span className="won">원</span>
                    </dd>
                </dl>
                <dl className="amount lst">
                    <dt className="tit">결제예정금액</dt>
                    <dd className="price">
                        {!loading && selectedCartItems ? (
                            <span className="num">
                                {getTotalAmount(selectedCartItems) + 3000}
                            </span>
                        ) : (
                            <span className="num">{3000}</span>
                        )}
                        <span className="won">원</span>
                    </dd>
                </dl>
            </div>

            {!loading && cartData && selectedCartItems.length === 0 ? (
                <Link to="/list">
                    <Button onClick={onOrder}>상품을 선택해주세요</Button>
                </Link>
            ) : (
                <Link to="/order">
                    <Button>주문하기</Button>
                </Link>
            )}
        </ShippingContainerWrap>
    );
};

export default ShippingContainer;
