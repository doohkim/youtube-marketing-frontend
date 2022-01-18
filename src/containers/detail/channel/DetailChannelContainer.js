import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavLink, withRouter } from 'react-router-dom';

import styled from 'styled-components';
import DetailChannelInfoComponent from '../../../components/detail/channel/DetailChannelInfoComponent';
import DetailChannelThumbnailComponent from '../../../components/detail/channel/DetailChannelThumbnailComponent';
import { readChannel, unloadChannel } from '../../../modules/channel';

import AnalysisContainer from './AnalysisContainer';

const DetailChannelContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    .DetailChannelContentWrap {
        width: 1080px;
        height: auto;
        margin: auto;
    }
`;
const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        /* border-bottom: 2px solid #22b8cf; */
        color: #db4455;
        &:hover {
            color: #db4455;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;
const DetailChannelContainer = ({ match }) => {
    // const channelId = 'UCOmHUn--16B90oW2L6FRR3A';
    const channelId = match.params.channelId;
    const dispatch = useDispatch();
    const { channelDetail, isLoading, channelDetailError } = useSelector(
        ({ channel }) => ({
            channelDetail: channel.channelDetail,
            isLoading: channel.isLoading,
            channelDetailError: channel.channelDetailError,
        }),
    );
    useEffect(() => {
        dispatch(unloadChannel());
    }, [dispatch]);

    useEffect(() => {
        dispatch(readChannel(channelId));
    }, [dispatch]);
    return (
        <DetailChannelContainerBlock>
            {channelDetail && (
                <DetailChannelThumbnailComponent
                    channelDetail={channelDetail}
                />
            )}
            <div className="DetailChannelContentWrap">
                {channelDetail && (
                    <DetailChannelInfoComponent channelDetail={channelDetail} />
                )}

                <Category to={`/channel/${channelId}/channel`} exact>
                    채널분석
                </Category>
                <Category to={`/channel/${channelId}/video`}>영상분석</Category>
                <Category to={`/channel/${channelId}/viewer`}>
                    시청자 분석
                </Category>
                <Route
                    path={`/channel/${channelId}/:type`}
                    component={AnalysisContainer}
                />
            </div>
        </DetailChannelContainerBlock>
    );
};
export default withRouter(DetailChannelContainer);
