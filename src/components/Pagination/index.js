import React from 'react';

import './style.css'

const Pagination = (props) => {
    const pages = []

    for(let i = 1; i <= props.totalPages ; i++){
        pages.push(i)
    }

    return (
        <div className="pagination-content">
            <ul>
                {pages.map((page,index) => (
                    
                    <li key={index} 
                        value={index+1}
                        onClick={props.handlePage}
                        className={props.currentPage === (index+1) ? 'active' : ''} 
                        >{page}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;