import React from 'react';
import ChannelTemplatContainer from '../containers/ChannelTemplateContainer';
import Header from '../containers/Header';

const HomePage = ({ match }) => {
    const category = match.params.category || 'searchChannelRank';
    return (
        <div>
            <Header />
            <ChannelTemplatContainer category={category} />
            {/* 동영상 순위 썸네일 포함 */}
            {/* <VideoTemplateContainer /> */}
        </div>
    );
};
export default HomePage;
