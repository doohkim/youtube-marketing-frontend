import React from 'react';
import DetailVideoContainer from '../containers/detail/video/DetailVideoContainer';
import Header from '../containers/Header';

const DetailVideoPage = ({ match }) => {
    return (
        <div>
            <Header />
            <DetailVideoContainer />
        </div>
    );
};
export default DetailVideoPage;
