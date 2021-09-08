import React from 'react';
import styled from 'styled-components';

const ChannelTemplateBlock = styled.div`
  width: 320px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    background: white;
  }
`;
const ChannelTemplate = ({ children, kind }) => {
  return (
    <ChannelTemplateBlock>
      <div className="app-title">{kind}</div>
      <div className="content">{children}</div>
    </ChannelTemplateBlock>
  );
};

export default ChannelTemplate;
