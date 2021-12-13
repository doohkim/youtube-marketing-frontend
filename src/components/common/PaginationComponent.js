import React from 'react';
import Pagination from 'react-js-pagination';
import './PaginationComponent.css';

const PaginationComponent = ({ posts, postsError, loading, setPage, page }) => {
    if (postsError) {
        return <div>에러가 발생했습니다.</div>;
    }
    if (loading || !posts) {
        return null;
    }
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={posts.count}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={setPage}
            // onClick={() => history.push(`/search/market/?`)}
        />
    );
};

export default PaginationComponent;
