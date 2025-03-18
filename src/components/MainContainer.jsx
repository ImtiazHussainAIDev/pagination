import React, { useState } from 'react';
import PaginationComponent from './PaginationComponent';
import PageContent from './PageContent';

const MainContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  // Increased items for better pagination demonstration
  const items = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  return (
    <div className="container mt-5">
      <PageContent 
        items={items}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <PaginationComponent 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MainContainer;