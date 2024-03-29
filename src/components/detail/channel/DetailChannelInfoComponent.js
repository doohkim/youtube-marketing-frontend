import React from 'react';
import styled from 'styled-components';
import { BsStar } from 'react-icons/bs';

import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import { BiWorld, BiShareAlt } from 'react-icons/bi';
const DetailChannelInfoComponentWrap = styled.div`
    display: flex;
    height: 157px;
    padding-top: 10px;
    padding: 10px;
    .channelInfoWrap {
        display: flex;
        .channelInfoThumbnail {
            img {
                margin-top: 20px;
                border-radius: 50%;
                width: 110.25px;
                height: 110.25px;
            }
        }
        .channelInfoContentWrap {
            margin: 15px;
            .title {
                font-size: 32px;
            }
            .description {
                width: 400px;
                overflow: hidden;
                overflow-x: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .channelTagWrap {
                display: flex;
                p {
                    display: inline-block;
                    padding: 0 13px;
                    margin-right: 9px;
                    background: #f1f1f1;
                    border-radius: 15px;
                    font-size: 12px;
                    line-height: 25px;
                    color: #7d7d7d;
                }
            }
        }
    }
    .channel-contact-wrap {
        display: flex;
        .search-channel-contact-icon {
            display: block;
            width: 20px;
            height: 20px;
            margin-right: 6px;
            overflow: hidden;
            border-radius: 50%;
            text-decoration: none;
            cursor: pointer;
            svg {
                font-size: 20px;
            }
        }
    }
    .detail-channel-share-block {
        display: flex;
        justify-content: flex-end;
        width: 380px;
        height: 55px;
        .country-info {
            display: flex;
            align-items: center;
            /* padding-right: 13px; */
            font-size: 13px;
            width: 82px;
            height: 55px;
        }
        .advertise-button {
            button {
                font-size: 15px;
                font-weight: 500;
                color: #fff;
                width: 169px;
                height: 55px;
                background-color: #ff0045;
                border: 1px solid #d9d9d9;
                border-radius: 4px;
            }
        }
        .share-icons {
            width: 55px;
            height: 55px;
            margin-right: 10px;
            button {
                width: 55px;
                height: 55px;
                background-color: #fff;
                border: 1px solid #d9d9d9;
                border-radius: 3px;
            }
        }
    }
`;

const DetailChannelInfoComponent = ({ channelDetail }) => {
    const {
        pk,
        title,
        logo,
        description,
        published_at,
        channel_statistics,
        categories,
    } = channelDetail;
    return (
        <DetailChannelInfoComponentWrap>
            <div className="channelInfoWrap">
                <div className="channelInfoThumbnail">
                    <img
                        src={logo.replace(
                            'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                            'https://',
                        )}
                        alt={title}
                    />
                </div>
                <div className="channelInfoContentWrap">
                    <div className="title">{title}</div>
                    <div className="description">
                        <span>{description}</span>
                    </div>
                    <div className="channelTagWrap">
                        {categories &&
                            categories.map((category) => (
                                <p key={category.id}>{category.kind}</p>
                            ))}
                    </div>
                    <div className="channel-contact-wrap">
                        <div className="search-channel-contact-icon">
                            <AiFillInstagram />
                        </div>
                        <div className="search-channel-contact-icon">
                            <AiFillYoutube />
                        </div>
                        <div className="search-channel-contact-icon">
                            <AiFillFacebook />
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail-channel-share-block">
                <div className="country-info">
                    <BiWorld size={22} />
                    대한민국
                </div>
                <div className="share-icons">
                    <button>
                        <BiShareAlt size={45} />
                    </button>
                </div>
                <div className="share-icons">
                    <button>
                        <BsStar size={45} />
                    </button>
                </div>
                <div className="advertise-button">
                    <button>광고 제안하기</button>
                </div>
            </div>
        </DetailChannelInfoComponentWrap>
    );
};

export default DetailChannelInfoComponent;
