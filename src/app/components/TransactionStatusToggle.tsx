/* eslint-disable jsx-a11y/role-supports-aria-props */
import { TransactionStatus } from "../model/Transaction";

export default function TransactionStatusToggle({ filteredTransactionStatus, setFilteredTransactionStatus }: { filteredTransactionStatus: TransactionStatus | null, setFilteredTransactionStatus: (status: TransactionStatus | null) => void }) {
    return (
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setFilteredTransactionStatus(null)}
          className={`px-3 py-1 rounded-full text-sm ${filteredTransactionStatus === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800'
            }`}
          aria-pressed={filteredTransactionStatus === null}
          role="tab"
        >
          All
        </button>
        <button
          onClick={() => setFilteredTransactionStatus('PENDING')}
          className={`px-3 py-1 rounded-full text-sm ${filteredTransactionStatus === 'PENDING'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-gray-100 text-gray-800'
            }`}
          aria-pressed={filteredTransactionStatus === 'PENDING'}
          role="tab"
        >
          Pending
        </button>
        <button
          onClick={() => setFilteredTransactionStatus('COMPLETED')}
          className={`px-3 py-1 rounded-full text-sm ${filteredTransactionStatus === 'COMPLETED'
            ? 'bg-[#17B67A]/10 text-[#17B67A]'
            : 'bg-gray-100 text-gray-800'
            }`}
          aria-pressed={filteredTransactionStatus === 'COMPLETED'}
          role="tab"
        >
          Completed
        </button>
      </div>
    );
  }