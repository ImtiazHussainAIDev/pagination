import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginationComponent from '../PaginationComponent';

describe('PaginationComponent', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correct number of page buttons', () => {
    render(<PaginationComponent {...defaultProps} />);
    const pageButtons = screen.getAllByRole('button');
    // Total buttons = pages + prev + next
    expect(pageButtons).toHaveLength(7);
  });

  test('disables Previous button on first page', () => {
    render(<PaginationComponent {...defaultProps} />);
    const prevButton = screen.getByText('Previous');
    expect(prevButton).toBeDisabled();
  });

  test('disables Next button on last page', () => {
    render(<PaginationComponent {...defaultProps} currentPage={5} />);
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  test('calls onPageChange with correct page number when page button clicked', () => {
    render(<PaginationComponent {...defaultProps} />);
    const pageButton = screen.getByText('3');
    fireEvent.click(pageButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(3);
  });

  test('calls onPageChange with correct page when Next clicked', () => {
    render(<PaginationComponent {...defaultProps} />);
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });
});