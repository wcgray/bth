import { useState } from "react";
import Transaction, { TransactionStatus } from "../model/Transaction";
import TransactionStatusToggle from "./TransactionStatusToggle";
import TransactionItem from "./TransactionItem";

export default function TransactionsList({transactions}: {transactions: Transaction[]}) {
  const [filteredTransactionStatus, setFilteredTransactionStatus] = useState<TransactionStatus | null>(null);

  return (
    <div className="flex flex-col gap-4 w-full">
      <TransactionStatusToggle
        filteredTransactionStatus={filteredTransactionStatus}
        setFilteredTransactionStatus={setFilteredTransactionStatus}
      />
      {transactions
        .filter(transaction => filteredTransactionStatus ? transaction.status === filteredTransactionStatus : true)
        .slice(0, 5)
        .map((transaction) => (<TransactionItem key={transaction.id} transaction={transaction} />))}
      {transactions.length === 0 && (
        <div className="text-center text-gray-500">
          No transactions yet
        </div>
      )}
    </div>
  );
}
