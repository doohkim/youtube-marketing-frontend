import React, { useCallback } from 'react';
import styled from 'styled-components';

import SearchResultContentComponent from './SearchResultContentComponent';

const SearchResultContentListBlock = styled.div`
    /* display: flex; */
    /* background: white; */
    align-items: center;
    justify-content: flex-end;
`;

const SearchResultContentList = ({
    channelContentList,
    // setChannelContentList,
}) => {
    // const onToggle = useCallback(
    //     (title) => {
    //         setChannelContentList(
    //             channelContentList.map((channelContent) =>
    //                 channelContent.title === title
    //                     ? {
    //                           ...channelContent,
    //                           isCertificated: !channelContent.isCertificated,
    //                       }
    //                     : channelContent,
    //             ),
    //         );
    //         console.log('여기서api 날리면 되는건가?');
    //     },
    //     [channelContentList],
    // );

    return (
        <SearchResultContentListBlock>
            {channelContentList &&
                channelContentList.map((channelList, index) => (
                    <SearchResultContentComponent
                        info={channelList}
                        index={index}
                        key={index}
                        // onToggle={onToggle}
                    />
                ))}
        </SearchResultContentListBlock>
    );
};

export default SearchResultContentList;
