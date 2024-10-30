export type TransactionType = 'ADVANCED' | 'REPAID';
export type TransactionStatus = 'PENDING' | 'COMPLETED';

export default class Transaction {
    id: string;
    status: TransactionStatus;
    type: TransactionType;
    amount: number;
    date: Date;

    constructor(id: string, status: TransactionStatus, type: TransactionType, amount: number, date: Date) {
        this.id = id;
        this.status = status;
        this.type = type;
        this.amount = amount;
        this.date = date;
    }

    static mockData(): Transaction[] {
        return [
            new Transaction('550e8400-e29b-41d4-a716-446655440000', 'COMPLETED', 'ADVANCED', 500, new Date('2024-01-15')),
            new Transaction('67e55044-10b1-426f-9247-bb680e5fe0c8', 'PENDING', 'REPAID', -200, new Date('2024-01-10')),
            new Transaction('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'COMPLETED', 'ADVANCED', 1000, new Date('2024-01-05')),
            new Transaction('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 'COMPLETED', 'REPAID', -500, new Date('2023-12-28')),
            new Transaction('6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', 'PENDING', 'ADVANCED', 750, new Date('2023-12-20')),
            new Transaction('7c9e6679-7425-40de-944b-e07fc1f90ae7', 'COMPLETED', 'REPAID', -750, new Date('2023-12-15')),
            new Transaction('8f14e45f-ceea-427c-a61b-6c8349bb4b31', 'PENDING', 'ADVANCED', 300, new Date('2023-12-10')),
            new Transaction('9f3e8a2c-5c2d-4b1f-9c1d-8e5ab9c1c2d3', 'COMPLETED', 'ADVANCED', 600, new Date('2023-12-05')),
            new Transaction('a1b2c3d4-e5f6-4a5b-9c3d-2e1f0a9b8c7d', 'COMPLETED', 'REPAID', -300, new Date('2023-11-30')),
            new Transaction('b2c3d4e5-f6a7-5b6c-0d1e-3f2g4h5i6j7k', 'PENDING', 'REPAID', -600, new Date('2023-11-25')),
            new Transaction('c3d4e5f6-g7h8-6c7d-1e2f-4g5h6i7j8k9l', 'COMPLETED', 'ADVANCED', 800, new Date('2023-11-20')),
            new Transaction('d4e5f6g7-h8i9-7d8e-2f3g-5h6i7j8k9l0m', 'COMPLETED', 'REPAID', -400, new Date('2023-11-15')),
            new Transaction('e5f6g7h8-i9j0-8e9f-3g4h-6i7j8k9l0m1n', 'PENDING', 'ADVANCED', 900, new Date('2023-11-10')),
            new Transaction('f6g7h8i9-j0k1-9f0g-4h5i-7j8k9l0m1n2o', 'COMPLETED', 'REPAID', -800, new Date('2023-11-05')),
            new Transaction('g7h8i9j0-k1l2-0g1h-5i6j-8k9l0m1n2o3p', 'PENDING', 'ADVANCED', 450, new Date('2023-10-30')),
            new Transaction('h8i9j0k1-l2m3-1h2i-6j7k-9l0m1n2o3p4q', 'COMPLETED', 'REPAID', -450, new Date('2023-10-25')),
            new Transaction('i9j0k1l2-m3n4-2i3j-7k8l-0m1n2o3p4q5r', 'COMPLETED', 'ADVANCED', 550, new Date('2023-10-20')),
            new Transaction('j0k1l2m3-n4o5-3j4k-8l9m-1n2o3p4q5r6s', 'PENDING', 'REPAID', -550, new Date('2023-10-15')),
            new Transaction('k1l2m3n4-o5p6-4k5l-9m0n-2o3p4q5r6s7t', 'COMPLETED', 'ADVANCED', 700, new Date('2023-10-10')),
            new Transaction('l2m3n4o5-p6q7-5l6m-0n1o-3p4q5r6s7t8u', 'COMPLETED', 'REPAID', -700, new Date('2023-10-05'))
        ];
    }
}
