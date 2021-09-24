import React from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DetailChannelInfoComponent from '../../../components/detail/channel/DetailChannelInfoComponent';
import DetailChannelThumbnailComponent from '../../../components/detail/channel/DetailChannelThumbnailComponent';
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
const DetailChannelContainer = () => {
    const id = 'asdf';
    return (
        <DetailChannelContainerBlock>
            <DetailChannelThumbnailComponent />
            <div className="DetailChannelContentWrap">
                <DetailChannelInfoComponent />
                {/* <Category to={`channel/${id}/`}>채널분석</Category> */}
                <Category to={`channel/${id}/`} exact>
                    채널분석
                </Category>
                <Category to="/channel/:id/video">영상분석</Category>
                <Category to="/channel/:id/viewer">시청자 분석</Category>
                <Route
                    path="/channel/:id/:type"
                    component={AnalysisContainer}
                />
            </div>
        </DetailChannelContainerBlock>
    );
};
export default DetailChannelContainer;
