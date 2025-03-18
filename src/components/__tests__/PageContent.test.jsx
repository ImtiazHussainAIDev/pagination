import React from 'react';
import { render, screen } from '@testing-library/react';
import PageContent from '../PageContent';

describe('PageContent', () => {
  const mockItems = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  const defaultProps = {
    items: mockItems,
    currentPage: 1,
    itemsPerPage: 10
  };

  test('renders correct number of items per page', () => {
    render(<PageContent {...defaultProps} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(10);
  });

  test('displays correct items for current page', () => {
    render(<PageContent {...defaultProps} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 10')).toBeInTheDocument();
  });

  test('displays correct items for second page', () => {
    render(<PageContent {...defaultProps} currentPage={2} />);
    expect(screen.getByText('Item 11')).toBeInTheDocument();
    expect(screen.getByText('Item 20')).toBeInTheDocument();
  });

  test('handles empty items array', () => {
    render(<PageContent {...defaultProps} items={[]} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});