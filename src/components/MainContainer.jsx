import React, { useState } from 'react';
import PaginationComponent from './PaginationComponent';
import PageContent from './PageContent';

const MainContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  // Mock data (replace with your actual data)
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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