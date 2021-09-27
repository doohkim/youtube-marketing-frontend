import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { BsStar, BsFillPersonFill } from 'react-icons/bs';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import {
    AiOutlinePlayCircle,
    AiFillInstagram,
    AiFillYoutube,
    AiFillFacebook,
    AiFillStar,
} from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const SearchResultContentComponentBlock = styled.div`
    background: white;
    display: flex;
    width: 100%;
    height: 171px;
    border-bottom: 1px solid gray;
    align-items: center;
    justify-content: center;
    .search-channel-result-wrap {
        display: flex;
        width: 941px;
        height: 110px;

        .search-channel-star-rank-wrap {
            width: 40px;
            height: 110px;
            margin-left: auto;
            margin-right: auto;
            align-items: center;
            text-align: center;
            .search-channel-favorite-star-wrap {
                background: white;
                width: 30px;
                height: 30px;
                margin-left: auto;
                margin-right: auto;
                svg {
                    width: 30px;
                    height: 30px;
                }
            }
            .search-channel-rank-text-wrap {
                margin-left: auto;
                margin-right: auto;
                margin-top: 16px;
                font-size: 1.4rem;
                width: 30px;
                height: 30px;
                text-align: center;
            }
        }

        .search-channel-thumbnail-wrap {
            width: 105px;
            height: 110px;
            img {
                width: 100%;
                height: auto;
                border-radius: 50%;
            }
        }
        .search-channel-description-wrap {
            flex: 1;
            height: 110px;
            .link-reset-wrap {
                text-decoration: none;
                color: black;
                background-color: #f59000;

                .search-channel-description-text {
                    font-size: 14px;
                    display: block;
                    width: 340px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-weight: 400;
                    white-space: nowrap;
                }
            }

            .search-channel-contact-wrap {
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
        .search-channel-info-wrap {
            flex: 1;
            /* height: 110px; */
            .search-channel-info-number {
                display: flex;
                height: 20px;
                span {
                    font-size: 1em;
                }
            }
        }
        .search-channel-present-video-thumbnail-wrap {
            flex: 0.6;
            height: 110px;
            img {
                display: block;
                width: 185px;
                height: 105px;
            }
        }
        & + & {
            border-top: 2px solid black;
        }
    }
`;

const SearchResultContentComponent = ({ info, index, onToggle }) => {
    const {
        channelId,
        title,
        isCertificated,
        thumbnails,
        description,
        subscriberCount,
        dailyViewChange,
        averageVideoViewCount,
        lastVideo,
    } = info;
    return (
        <SearchResultContentComponentBlock>
            <div className="search-channel-result-wrap">
                <div className="search-channel-star-rank-wrap">
                    <div
                        className={cn(
                            'search-channel-favorite-star-wrap',
                            isCertificated,
                        )}
                        onClick={() => onToggle(title)}
                    >
                        {isCertificated ? <AiFillStar /> : <BsStar />}
                    </div>
                    <div className="search-channel-rank-text-wrap">
                        {index + 1}
                    </div>
                </div>
                <div className="search-channel-thumbnail-wrap">
                    <Link to={`/channel/${channelId}`}>
                        <img src={thumbnails} alt="thumbnail" />
                    </Link>
                </div>
                <div className="search-channel-description-wrap">
                    <Link
                        className="link-reset-wrap"
                        to={`/channel/${channelId}`}
                    >
                        <div>{title}</div>
                    </Link>
                    <Link
                        className="link-reset-wrap"
                        to={`/channel/${channelId}`}
                    >
                        <div className="search-channel-description-text">
                            {description}
                        </div>
                    </Link>
                    <p>음악</p>
                    <div className="search-channel-contact-wrap">
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
                <div className="search-channel-info-wrap">
                    <div className="search-channel-info-number">
                        <p>
                            <i>
                                <BsFillPersonFill />
                            </i>
                            <span>구독자 수 : </span>
                        </p>
                        <p>{Math.round(subscriberCount / 10000)}만</p>
                        <p>
                            <i>
                                {Math.round(subscriberCount / 10000) > 0 ? (
                                    <FaLongArrowAltUp />
                                ) : (
                                    <FaLongArrowAltDown />
                                )}
                            </i>
                            <span>
                                {Math.abs(Math.round(subscriberCount / 10000))}{' '}
                            </span>
                        </p>
                    </div>
                    <div className="search-channel-info-number">
                        <p>
                            <i>
                                <BiPlay />
                            </i>
                            <span>일일조회수 : </span>
                        </p>
                        <p>{Math.abs(Math.round(dailyViewChange / 10000))}만</p>
                        <p>
                            <i>
                                {Math.round(dailyViewChange / 10000) > 0 ? (
                                    <FaLongArrowAltUp />
                                ) : (
                                    <FaLongArrowAltDown />
                                )}
                            </i>
                            <span>
                                {Math.abs(Math.round(dailyViewChange / 10000))}{' '}
                            </span>
                        </p>
                    </div>
                    <div className="search-channel-info-number">
                        <p>
                            <i>
                                <AiOutlinePlayCircle />
                            </i>
                            <span>영상별 평균 조회수 : </span>
                        </p>
                        <p>{Math.round(averageVideoViewCount / 10000)}만</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div className="search-channel-present-video-thumbnail-wrap">
                    <div>
                        <Link to={`/detail/${lastVideo.videoId}`}>
                            <img src={lastVideo.thumbnails} alt="thumbnail" />
                        </Link>
                    </div>
                </div>
            </div>
        </SearchResultContentComponentBlock>
    );
};

export default SearchResultContentComponent;
