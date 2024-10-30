import Transaction from '../Transaction';

describe('Transaction', () => {
  it('should create a transaction with correct properties', () => {
    const date = new Date();
    const transaction = new Transaction(
      '123',
      'COMPLETED',
      'ADVANCED',
      500,
      date
    );

    expect(transaction.id).toBe('123');
    expect(transaction.status).toBe('COMPLETED');
    expect(transaction.type).toBe('ADVANCED');
    expect(transaction.amount).toBe(500);
    expect(transaction.date).toBe(date);
  });

  it('should generate mock data with correct structure', () => {
    const mockData = Transaction.mockData();
    
    expect(Array.isArray(mockData)).toBe(true);
    expect(mockData.length).toBeGreaterThan(0);
    
    const firstTransaction = mockData[0];
    expect(firstTransaction).toBeInstanceOf(Transaction);
    expect(typeof firstTransaction.id).toBe('string');
    expect(['PENDING', 'COMPLETED']).toContain(firstTransaction.status);
    expect(['ADVANCED', 'REPAID']).toContain(firstTransaction.type);
    expect(typeof firstTransaction.amount).toBe('number');
    expect(firstTransaction.date).toBeInstanceOf(Date);
  });
}); 