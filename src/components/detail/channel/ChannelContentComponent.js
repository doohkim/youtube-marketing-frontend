import React from 'react';
import styled from 'styled-components';

const ChannelContentComponentWrap = styled.div`
    width: 244px;
    height: 50px;
    display: flex;

    .profileThumbnail {
        background: gray;
        img {
            border-radius: 50%;
        }
    }

    .profileInfo {
        flex: 1;
        background: white;
        margin-left: 10px;
        .profileTitle {
            box-sizing: border-box;
        }
        .profileState {
            display: flex;
            .profileViewCount {
            }
            .profilePublishedAt {
            }
        }
    }
`;

const ChannelContentComponent = ({ channel }) => {
    const {
        channel_title,
        channel_logo,
        channel_description,
        subscriber_count,
    } = channel;
    return (
        <ChannelContentComponentWrap>
            <div className="profileThumbnail">
                <img
                    src={channel_logo.replace(
                        'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                        'https://',
                    )}
                    alt="thumbnail"
                    width="55"
                />
            </div>
            <div className="profileInfo">
                <div className="profileTitle">{channel_title}</div>
                <div className="profileState">구독자 수 {subscriber_count}</div>
            </div>
        </ChannelContentComponentWrap>
    );
};
export default ChannelContentComponent;
