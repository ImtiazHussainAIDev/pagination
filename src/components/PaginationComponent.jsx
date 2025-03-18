import React from 'react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const shouldTruncate = totalPages > 7;
    
    if (!shouldTruncate) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      // Always show first page
      pages.push(renderPageButton(1));
      
      // Show dots after first page if current page is too far
      if (currentPage > 4) {
        pages.push(<li key="dots1" className="page-item disabled"><span className="page-link">...</span></li>);
      }
      
      // Calculate middle pages
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(renderPageButton(i));
      }
      
      // Show dots before last page if necessary
      if (currentPage < totalPages - 3) {
        pages.push(<li key="dots2" className="page-item disabled"><span className="page-link">...</span></li>);
      }
      
      // Always show last page
      pages.push(renderPageButton(totalPages));
    }
    
    return pages;
  };

  const renderPageButton = (pageNum) => (
    <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
      <button 
        className="page-link" 
        onClick={() => onPageChange(pageNum)}
      >
        {pageNum}
      </button>
    </li>
  );

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            First
          </button>
        </li>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button 
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button 
            className="page-link"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;