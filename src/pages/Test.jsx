import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
function Test() {


    return (
        <div className="mt-20 inline-flex">
        <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            pageRangeDisplayed={3}
            pageCount={5}
            previousLabel="previous"
            renderOnZeroPageCount={null}
            className={"inline-flex -space-x-px"}
            pageClassName={"px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
            
            previousClassName={"px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
            nextClassName={"px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
            activeClassName={"px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"}
        />
    </div>
    )
} export default Test;