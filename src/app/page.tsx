'use client';

import { useState } from "react";
import TransactionsList from "./components/TransactionsList";
import Transaction from "./model/Transaction";
import RequestCashAdvanceForm from "./components/RequestCashAdvanceForm";
import CurrentBalanceHeader from "./components/CurrentBalanceHeader";

export default function Home() {
  const [transactions, setTransactions] = useState(Transaction.mockData());
  const [showRequestCashAdvance, setShowRequestCashAdvance] = useState(false);

  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:grid-rows-[20px_1fr_20px] sm:p-20 sm:gap-16 font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-gray-50">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start sm:gap-8 max-w-4xl w-full">
        <CurrentBalanceHeader
          transactions={transactions}
          setShowRequestCashAdvance={setShowRequestCashAdvance}
        />
        <TransactionsList transactions={transactions} />
        
        {showRequestCashAdvance && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
            onClick={() => setShowRequestCashAdvance(false)}
          >
            <div
              className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95 opacity-0 animate-modal-enter mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <RequestCashAdvanceForm
                onClose={() => setShowRequestCashAdvance(false)}
                addTransaction={(transaction) => setTransactions([transaction, ...transactions])}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}