import React from 'react';
import styled from 'styled-components';
import ChannelListItem from './ChannelListItem';

const ChannelListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const ChannelList = ({ info }) => {
  // const [channelListInfo, setChannelListInfo] = useState(info)
  return (
    <ChannelListBlock>
      {info.map((channeData) => (
        <ChannelListItem info={channeData} key={info.pk} />
      ))}
    </ChannelListBlock>
  );
};
export default ChannelList;
