import { render, screen } from '@testing-library/react';
import TransactionItem from '../TransactionItem';
import Transaction from '../../model/Transaction';

describe('TransactionItem', () => {
  const mockTransaction = new Transaction(
    'test-id',
    'COMPLETED',
    'ADVANCED',
    500,
    new Date('2024-01-15')
  );

  it('renders transaction details correctly', () => {
    render(<TransactionItem transaction={mockTransaction} />);

    expect(screen.getByText('Advanced: $500.00')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('applies correct styling for PENDING status', () => {
    const pendingTransaction = new Transaction(
      'test-id',
      'PENDING',
      'ADVANCED',
      500,
      new Date('2024-01-15')
    );

    render(<TransactionItem transaction={pendingTransaction} />);
    const statusElement = screen.getByText('Pending');
    
    expect(statusElement).toHaveClass('bg-[#FCA931]/10');
    expect(statusElement).toHaveClass('text-[#FCA931]');
  });

  it('applies correct styling for COMPLETED status', () => {
    render(<TransactionItem transaction={mockTransaction} />);
    const statusElement = screen.getByText('Completed');
    
    expect(statusElement).toHaveClass('bg-[#17B67A]/10');
    expect(statusElement).toHaveClass('text-[#17B67A]');
  });
}); 