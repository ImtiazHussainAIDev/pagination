import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import MainContainer from '../MainContainer';

describe('MainContainer', () => {
  test('renders initial page content and pagination', () => {
    render(<MainContainer />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('changes page content when clicking next button', () => {
    render(<MainContainer />);
    const nextButton = screen.getByText('Next');
    
    fireEvent.click(nextButton);
    
    expect(screen.getByText('Item 11')).toBeInTheDocument();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  test('changes page content when clicking page number', () => {
    render(<MainContainer />);
    const pageThreeButton = screen.getByText('3');
    
    fireEvent.click(pageThreeButton);
    
    expect(screen.getByText('Item 21')).toBeInTheDocument();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  test('displays correct number of items per page', () => {
    render(<MainContainer />);
    // Add a data-testid to target only content items
    const listItems = screen.getAllByRole('listitem', { name: /^Item \d+$/i });
    expect(listItems).toHaveLength(10);
  });

  test('calculates total pages correctly', () => {
    render(<MainContainer />);
    // With 100 items and 10 items per page, should have 10 page buttons
    const pageButtons = screen.getAllByRole('button');
    // Total buttons = 10 pages + prev + next
    expect(pageButtons).toHaveLength(12);
  });
});