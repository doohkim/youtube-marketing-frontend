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

const ChannelContentComponent = () => {
    return (
        <ChannelContentComponentWrap>
            <div className="profileThumbnail">
                <img
                    src="https://yt3.ggpht.com/ytc/AKedOLRhY0cWgT98nkPG7ByziBdAP-eBAEVxBc-eyvZG=s800-c-k-c0x00ffffff-no-rj"
                    alt="thumbnail"
                    width="55"
                />
            </div>
            <div className="profileInfo">
                <div className="profileTitle">channel title</div>
                <div className="profileState">구독자 수 6140만</div>
            </div>
        </ChannelContentComponentWrap>
    );
};
export default ChannelContentComponent;
