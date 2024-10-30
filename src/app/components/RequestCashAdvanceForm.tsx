import { useState } from "react";
import Transaction from "../model/Transaction";
import StyledButton from "./StyledButton";

type RequestCashAdvanceFormMessage = {
  type: 'error' | 'success';
  message: string;
}

export default function RequestCashAdvanceForm({ onClose, addTransaction }: { onClose: () => void, addTransaction: (transaction: Transaction) => void }) {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState<RequestCashAdvanceFormMessage | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Request a Cash Advance</h2>
          {message &&
            <div className={`p-4 rounded-md ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message.message}
            </div>
          }
          <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-sm text-gray-600">
              Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              min="0"
              step="0.01"
              className="border rounded-md p-2"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9.]/g, '');
                if (value) {
                  setAmount(parseFloat(value));
                } else {
                  setAmount(0);
                }
              }}
            />
          </div>

          <div className="flex gap-4 justify-center">
            <StyledButton
              title="Submit Request"
              onClick={() => {
                if (amount <= 0) {
                  setMessage({ type: 'error', message: 'Amount must be greater than 0' });
                  return;
                }
                if (amount > 1000) {
                  setMessage({ type: 'error', message: 'Amount must be less than $1000' });
                  return;
                }

                const transaction = new Transaction(crypto.randomUUID(), 'PENDING', 'ADVANCED', amount, new Date());
                addTransaction(transaction);
                const message = `You have requested $${amount.toFixed(2)}. It will be processed shortly.`;
                setMessage({ type: 'success', message });
                setAmount(0);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}