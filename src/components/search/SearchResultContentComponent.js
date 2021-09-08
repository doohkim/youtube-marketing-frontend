import React from 'react';
import styled from 'styled-components';
import { BsStar, BsStarFill } from 'react-icons/bs';

import { AiFillYoutube } from 'react-icons/ai';
const SearchResultContentComponentBlock = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  border-bottom: 1px solid gray;

  .search-channel-star-rank-wrap {
    /* background: green; */
    width: 40px;
    height: 171px;
  }
  .search-channel-thumbnail-wrap {
    /* background: red; */
    width: 105px;
    height: 171px;
    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }
  .search-channel-description-wrap {
    flex: 1;
    /* background: gray; */
    height: 171px;
    .search-channel-description-text {
      font-size: 14px;
      display: block;
      width: 340px;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: 400;
      white-space: nowrap;
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
    /* background: blue; */
    height: 171px;
  }
  .search-channel-present-video-thumbnail-wrap {
    flex: 0.6;
    /* background: orange; */
    height: 171px;
    img {
      display: block;
      width: 185px;
      height: 105px;
    }
  }

  /* .search-user-favorit-channel-star {
        width:30px;
        height: 30px;
    }

    .search-channel-rank-number {
        width: 30px;
        height: 26px;
    }
    .search-channel-thumbnail {
        width: 90px;
        height: 90px;
    }

    .search-channel-info-title {
        width: 333px;
        height: 26px;
    }
    .search-channel-info-description {
        width: 333px;
        height: 20px;
    }
    .search-channel-info-category {
        width: 48px;
        height: 25px;
    }
    .search-channel-info-contact-link-img {
        width: 20px;
        height: 20px;
    }
    .search-channel-info-current-data {
        width
    } */
  & + & {
    border-top: 2px solid black;
  }
`;

const SearchResultContentComponent = ({ info, index }) => {
  return (
    <SearchResultContentComponentBlock>
      <div className="search-channel-star-rank-wrap">
        <div>
          <BsStar />
        </div>
        <div>{index + 1}</div>
      </div>
      <div className="search-channel-thumbnail-wrap">
        <img src={info.thumbnails} alt="thumbnail" />
      </div>
      <div className="search-channel-description-wrap">
        <div>{info.title}</div>
        <div className="search-channel-description-text">
          {info.description}
        </div>
        <p>음악</p>
        <div className="search-channel-contact-wrap">
          <div className="search-channel-contact-icon">
            <AiFillYoutube />
          </div>
          <div className="search-channel-contact-icon">
            <AiFillYoutube />
          </div>
          <div className="search-channel-contact-icon">
            <AiFillYoutube />
          </div>
        </div>
      </div>
      <div className="search-channel-info-wrap">
        <div>구독자 수 : {info.subscriberCount}</div>
        <div>일일조회수 수 : {info.dailyViewChange}</div>
        <div>영상별 평균 조회수 : {info.averageVideoViewCount}</div>
      </div>
      <div className="search-channel-present-video-thumbnail-wrap">
        <div>
          <img src={info.lastVideo.thumbnails} alt="thumbnail" />
        </div>
      </div>
    </SearchResultContentComponentBlock>
  );
};

export default SearchResultContentComponent;
