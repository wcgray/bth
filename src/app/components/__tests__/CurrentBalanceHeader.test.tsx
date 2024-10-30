import { render, screen, fireEvent } from '@testing-library/react';
import CurrentBalanceHeader from '../CurrentBalanceHeader';
import Transaction from '../../model/Transaction';

describe('CurrentBalanceHeader', () => {
  const mockTransactions = [
    new Transaction('1', 'COMPLETED', 'ADVANCED', 500, new Date()),
    new Transaction('2', 'COMPLETED', 'REPAID', -200, new Date()),
  ];

  const mockSetShowRequestCashAdvance = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls setShowRequestCashAdvance when button is clicked', () => {
    render(
      <CurrentBalanceHeader
        transactions={mockTransactions}
        setShowRequestCashAdvance={mockSetShowRequestCashAdvance}
      />
    );

    const button = screen.getByText('Request a Cash Advance');
    fireEvent.click(button);

    expect(mockSetShowRequestCashAdvance).toHaveBeenCalledWith(true);
  });

  it('calculates balance correctly with empty transactions', () => {
    render(
      <CurrentBalanceHeader
        transactions={[]}
        setShowRequestCashAdvance={mockSetShowRequestCashAdvance}
      />
    );

    expect(screen.getByText('$0.00')).toBeInTheDocument();
  });
}); 