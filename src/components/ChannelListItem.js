import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import styled from 'styled-components';

const ChannelListItemBlock = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center; /* 수직 정렬 */

  /* align-items: center; */
  .channel-rank {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
  }
  .chennl-img {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center; /* 수직 정렬 */
    svg {
      display: flex;
      justify-content: center;
    }
  }
  .channel-title {
    display: flex;
    flex: 1;
    align-items: center;

    .text {
      margin-left: 0.5rem;
      margin: 0 auto;
    }
  }
  .channel-subscriber {
    display: flex;
    align-items: center;
  }

  & + & {
    border-top: 2px solid #dee2e6;
  }
`;

const ChannelListItem = ({ info }) => {
  const { pk, title, subscriber } = info;
  return (
    <ChannelListItemBlock>
      <div className="channel-rank">{pk}</div>
      <div className="channel-img">
        <MdRemoveCircleOutline size={32} />
      </div>
      <div className="channel-title">
        <div className="text">{title}</div>
      </div>
      <div className="channel-subscriber">{subscriber}</div>
      <div className="channel-subscriber">
        {/*상승세면 상승 이미지 하락이면 하락 이미지*/}
        <MdRemoveCircleOutline size={32} />
      </div>
    </ChannelListItemBlock>
  );
};

export default ChannelListItem;
