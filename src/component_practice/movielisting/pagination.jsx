import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

const Pagination = (props) => {
    const {countItem, pageSize, onPageChange, currentPage} = props;
    //console.log(countItem);
    const pageCount = Math.ceil(countItem / pageSize);
    //const pages = Array.apply(null, {length: pageCount}).map(Number.call, Number)
    if(pageCount === 1){
        return null
    }
    
    else{
        const pages = _.range(1, pageCount +1)
        //console.log(pageCount)
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(number =>
                        <li key={number} onClick={()=>onPageChange(number)} className={(number === currentPage)? "page-item active": "page-item"}><span className="page-link">{number}</span></li>
                    )} 
                    
                </ul>
            </nav>
        )

    }
}

Pagination.propTypes = {
    countItem:propTypes.number.isRequired, 
    pageSize:propTypes.number.isRequired, 
    currentPage:propTypes.number.isRequired,
    onPageChange:propTypes.func.isRequired
}
 
export default Pagination;