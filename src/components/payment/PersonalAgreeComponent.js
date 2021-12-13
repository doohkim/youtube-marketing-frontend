import React, { useCallback } from 'react';
import styled from 'styled-components';
import { GrRadial, GrStatusGoodSmall } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const PersonalAgreeComponentBlock = styled.div`
    width: 742px;
    height: 320px;
    h2 {
        padding: 74px 0 16px;
        font-weight: bold;
        font-size: 20px;
        color: #333;
        line-height: 29px;
        clear: both;
        border-bottom: 1px solid black;
    }
    .personal_info_block {
        width: 742px;
        height: 40px;
        display: flex;
        h3 {
            width: 190px;
            height: 27px;
            padding: 13px 0 0;
            font-size: 18px;
            font-weight: 700;
            color: #333;
            line-height: 24px;
            letter-spacing: -0.32px;
            vertical-align: top;
        }
        .toggle-img {
            margin-top: 25px;
            width: 27px;
            height: 27px;
            padding: 10px 0 0 10px;
            img {
                width: 27px;
                height: 27px;
            }
        }
    }
    .personalAgreeWrap {
        .section_full {
            width: 742px;
            ul {
                width: 742px;
                li {
                    width: 370px;
                }
            }
        }
    }
`;

const PersonalAgreeComponent = ({ agree, setAgree }) => {
    const onClick = useCallback(() => {
        setAgree(!agree);
    }, [agree]);
    return (
        <PersonalAgreeComponentBlock>
            <h2>개인정보 수집/제공</h2>
            <div className="">
                <div className="personal_info_block">
                    <div className="toggle-img" onClick={onClick}>
                        {agree ? <GrStatusGoodSmall /> : <GrRadial />}
                    </div>
                    <h3>결제 진행 필수 동의</h3>
                </div>
            </div>
            <div className="personalAgreeWrap">
                <ul className="section_full">
                    <li>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개인정보
                            수집 · 이용 및 처리 동의
                        </span>
                        <span>(필수)</span>
                    </li>

                    <li>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;결제대행
                            서비스 약관 동의
                        </span>
                        <span>(필수)</span>
                    </li>
                    <li>
                        <span>
                            <Link to="">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전자지급
                                결제대행 서비스 이용약관 동의
                            </Link>
                        </span>
                        <span>(필수)</span>
                    </li>
                </ul>
            </div>
        </PersonalAgreeComponentBlock>
    );
};
export default PersonalAgreeComponent;
