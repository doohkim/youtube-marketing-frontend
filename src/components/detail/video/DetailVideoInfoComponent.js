import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineComment } from 'react-icons/ai';
import { IoIosShareAlt, IoIosThumbsUp, IoIosThumbsDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
const MoreButton = styled.button`
    all: unset;
    /* position: absolute; */
    bottom: 0;
    right: 0;
    max-height: 2rem;
    line-height: 2rem;
    padding-left: 20px;
    /* background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 18%
    ); */
    &.hide {
        display: none;
    }
`;
// const Ellipsis = styled.div`
//     position: relative;
//     display: -webkit-box;
//     max-height: 6rem;
//     line-height: 2rem;
//     overflow: hidden;
//     -webkit-line-clamp: 3;
//     &.show {
//         display: block;
//         max-height: none;
//         overflow: auto;
//         -webkit-line-clamp: unset;
//     }
// `;
const DetailVideoInfoWrap = styled.div`
    display: flex;
    .detail-info-wrap {
        .detail-video-decription {
            width: 980px;
            height: 350px;
        }
        .detail-video-view-container {
            display: flex;
            font-size: 16px;
            .detail-video-view-diver {
                border-left: 1px solid #e2e2e2;
            }
        }
        .advertise-market-wrap {
            display: flex;
            justify-content: flex-end;
        }
        h3 {
            width: 745px;
        }
    }
    .detail-share-image-block {
        display: flex;
        justify-content: space-between;
        width: 245px;
        height: 50px;

        .share-image-info {
            width: 30px;
            height: 49px;
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            align-content: center;
            font-size: 14px;
            svg {
                flex: 1;
                width: 25px;
                height: 25px;
            }
        }
    }
`;

const DetailVideoInfoComponent = () => {
    const contentRef = useRef(null);
    const [isShowReadMore, setIsShowReadMore] = useState(false);
    const data =
        '적당한 모바일 화면에서는 잘 되는 것 같지만, 반응형 대응이 잘 안되어 마음에 썩 들지 않았다.\
    화면이 큰 모바일의 경우 텍스트들이 한줄이 되는데도 불구하고 더보기 버튼이 생성되게 되는데, 이런 경우에는 더보기 버튼은 없어지고 내용이 다 보여야 한다고 생각했다.\
    사용할만한 상황: 텍스트 줄 수에 크게 상관이 없고, 적당히 텍스트의 글이 보일 만큼 보이고 더보기로 가려놓길 바란다면 사용하기 좋을 것 같다.\
    근데 이게 디자인과 가장 비슷하게 나온다..(예고)';
    const onClick = (e) => {
        contentRef.current.classList.add('show');
        e.currentTarget.classList.add('hide');
    };
    const [limit, setLimit] = useState(50);
    const toggleEllipsis = (str, limit) => {
        return {
            string: str.slice(0, limit),
            isShowMore: str.length > limit,
        };
    };

    const onClickMore = (str) => () => {
        setLimit(str.length);
    };
    return (
        <DetailVideoInfoWrap>
            <div className="detail-info-wrap">
                <div className="detail-video-view-container">
                    <div className="">
                        조회수
                        <span> : 1,052,566</span>
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;날짜
                        <span> : 2021-08-30</span>
                    </div>
                </div>
                <div>
                    <h3>
                        fromis_9 (프로미스나인) 'Talk & Talk' Official Teaser 2
                    </h3>
                </div>
                <div className="detail-video-decription">
                    {toggleEllipsis(data, limit).string}
                    {toggleEllipsis(data, limit).isShowMore && (
                        <MoreButton onClick={onClickMore(data)}>
                            ...더보기
                        </MoreButton>
                    )}
                </div>
                <div className="advertise-market-wrap">
                    <Link to="search/market">
                        <button>상품 마켓</button>
                    </Link>
                </div>
            </div>
            <div className="detail-share-image-block">
                <div className="share-image-info">
                    <IoIosThumbsUp />
                    <span>2698</span>
                </div>
                <div className="share-image-info">
                    <IoIosThumbsDown />
                    <span>85</span>
                </div>
                <div className="share-image-info">
                    <AiOutlineComment />
                    <span>961</span>
                </div>
                <div className="share-image-info">
                    <IoIosShareAlt style={{ width: 35, height: 35 }} />
                </div>
            </div>
        </DetailVideoInfoWrap>
    );
};

export default DetailVideoInfoComponent;
