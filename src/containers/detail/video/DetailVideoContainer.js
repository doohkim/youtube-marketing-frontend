import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchResultVideoContainer from '../../search/video/SearchResultVideoContainer';
import DetailVideoInfoContainer from './DetailVideoInfoContainer';
import DetailVideoChartContainer from './DetailVideoChartContainer';
import DetailVideoFrameContainer from './DetailVideoFrameContainer';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readVideo } from '../../../modules/videos';

const DetailVideoContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    .DetailVideoContentWrap {
        width: 1080px;
        height: auto;
        margin: auto;
    }
`;

const DetailVideoContainer = ({ match }) => {
    const { videoId } = match.params;
    const dispatch = useDispatch();

    const { videoDetail, videoDetailError, isLoading } = useSelector(
        ({ video }) => ({
            videoDetail: video.videoDetail,
            videoDetailError: video.videoDetailError,
            isLoading: video.isLoading,
        }),
    );

    useEffect(() => {
        dispatch(readVideo(videoId));
    }, [dispatch]);

    return (
        <DetailVideoContainerBlock>
            <DetailVideoFrameContainer videoId={videoId} />
            <div className="DetailVideoContentWrap">
                {videoDetail && (
                    <DetailVideoInfoContainer videoDetail={videoDetail} />
                )}
                {videoDetail && (
                    <DetailVideoChartContainer chartData={videoDetail} />
                )}
                {videoDetail && <SearchResultVideoContainer />}
            </div>
        </DetailVideoContainerBlock>
    );
};

export default withRouter(DetailVideoContainer);
