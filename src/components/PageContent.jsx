import React from 'react';

const PageContent = ({ items, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="mb-4">
      <ul className="list-group" data-testid="content-list">
        {currentItems.map((item, index) => (
          <li 
            key={startIndex + index} 
            className="list-group-item"
            aria-label={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageContent;