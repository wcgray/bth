import Transaction from "../model/Transaction";

export default function TransactionItem({ transaction }: { transaction: Transaction }) {
    const dateString = transaction.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    return (
      <div className="relative flex justify-between items-center p-4 border rounded-lg shadow-sm group bg-white">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-600">
            {dateString}
          </span>
          <span className="font-medium">
            {transaction.type === 'ADVANCED' ? 'Advanced: ' : 'Repaid: '}
            ${Math.abs(transaction.amount).toFixed(2)}
          </span>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm ${transaction.status === 'PENDING'
            ? 'bg-[#FCA931]/10 text-[#FCA931]'
            : 'bg-[#17B67A]/10 text-[#17B67A]'
            }`}
        >
          {transaction.status.charAt(0) + transaction.status.slice(1).toLowerCase()}
        </span>
  
        {/* Tooltip - hidden on mobile */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 w-48 p-2 bg-gray-700 text-white text-xs rounded-lg shadow-lg opacity-0 hidden sm:block lg:group-hover:opacity-100 transition-opacity z-10"
          style={{ paddingBottom: '8px' }}
        >
          <p><strong>ID:</strong> {transaction.id}</p>
          <p><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</p>
          <p><strong>Status:</strong> {transaction.status}</p>
          <p><strong>Date:</strong> {dateString}</p>
        </div>
      </div>
    );
  }
  