import React, { useCallback } from 'react';
import styled from 'styled-components';

const CardComponentBlock = styled.section`
    width: 742px;
    .title {
        width: 100%;
        h2 {
            padding: 74px 0 16px;
            font-weight: bold;
            font-size: 20px;
            color: #333;
            line-height: 29px;
            clear: both;
            border-bottom: 1px solid black;
        }
    }

    .input_section {
        width: 100%;
        display: table;
        margin-bottom: 6px;
        border: 1px solid #ddd;
        background: #fff;

        .input_title {
            display: table-cell;
            width: 86px;
            height: 14px;
            line-height: 13px;
            padding: 13px 0 13px 12px;
            font-size: 13px;
            border-right: 1px solid #eee;
            color: #664;
            box-sizing: content-box;
        }
        .input_type1 {
            display: table-cell;
            position: relative;
            .card_num {
                width: 142px;
                padding: 0 5px;
                text-align: center;
            }
            input {
                width: 100%;
                height: 20px;
                padding-left: 5px;
                line-height: 20px;
                border: none;
                /* --webkit-appearance: none; */
                border-radius: 0 3px 3px 0;
                font-weight: 500;
                font-size: 13px;
                vertical-align: middle;
                top: 10px;
                background: #fff;
            }
            * {
                box-sizing: border-box;
                word-break: keep-all;
                word-wrap: break-word;
            }
        }
    }
`;

const CardComponent = ({ onChangeField }) => {
    const onChange = (e) => {
        onChangeField({ key: e.target.name, value: e.target.value });
    };

    return (
        <CardComponentBlock>
            <div className="title">
                <h2>카드 정보 입력</h2>
            </div>

            {/* <div className="input_section">
                <label for="name_input" className="input_title">
                    주문번호
                </label>
                <div className="input_type1">
                    <input
                        type="tel"
                        maxLength={18}
                        inputMode="numeric"
                        className="card_num"
                        name="order_number"
                        value={'PAYGO' + new Date().getTime()}
                        onChange={onChangeOrderNumberField}
                    />
                </div>
            </div> */}
            <div className="input_section">
                <label for="name_input" className="input_title">
                    주민번호
                </label>
                <div className="input_type1">
                    <input
                        type="tel"
                        maxLength={6}
                        inputMode="numeric"
                        className="card_num"
                        name="jumin"
                        placeholder="앞6자리"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="input_section">
                <label for="name_input" className="input_title">
                    카드비밀번호
                </label>
                <div className="input_type1">
                    <input
                        type="password"
                        maxLength={2}
                        inputMode="numeric"
                        className="card_num"
                        name="cardPwd"
                        placeholder="앞2자리"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="input_section">
                <label for="name_input" className="input_title">
                    카드유효기간
                </label>
                <div className="input_type1">
                    <input
                        type="tel"
                        maxLength={2}
                        inputMode="numeric"
                        className="card_num"
                        name="cardAvailMonth"
                        placeholder="MM"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                    /
                    <input
                        type="tel"
                        maxLength={2}
                        className="card_num"
                        name="cardAvailYear"
                        inputMode="numeric"
                        placeholder="YY"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="input_section">
                <label for="name_input" className="input_title">
                    신용카드번호
                </label>
                <div className="input_type1">
                    <input
                        type="tel"
                        maxLength={4}
                        inputMode="numeric"
                        className="card_num"
                        name="cardNumber1"
                        placeholder="1234"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                    -
                    <input
                        type="tel"
                        maxLength={4}
                        className="card_num"
                        name="cardNumber2"
                        inputMode="numeric"
                        placeholder="1234"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                    -
                    <input
                        type="tel"
                        maxLength={4}
                        className="card_num"
                        inputMode="numeric"
                        name="cardNumber3"
                        placeholder="1234"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                    -
                    <input
                        type="tel"
                        maxLength={4}
                        className="card_num"
                        inputMode="numeric"
                        name="cardNumber4"
                        placeholder="1234"
                        pattern="[0-9]*"
                        onChange={onChange}
                    />
                </div>
            </div>
        </CardComponentBlock>
    );
};
export default CardComponent;
