import React from 'react';
import _ from 'lodash';

const Pagination = ({totalItems, pageSize, currentPage, onPageClick}) => {

   const totalPage = _.ceil(totalItems/pageSize);
    const pages = _.range(1,totalPage+1);

        return (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {pages.map(page => (
                <li key={page}
                  className={
                    currentPage === page ? "page-item active" : "page-item"
                  }
                >
                  <button className="page-link"  onClick={()=>onPageClick(page)}>{page}</button>
                </li>
              ))}
            </ul>
          </nav>
        );
}


export default Pagination;