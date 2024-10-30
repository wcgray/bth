import { useEffect, useState } from "react";
import Transaction from "../model/Transaction";
import StyledButton from "./StyledButton";

export default function CurrentBalanceHeader({ transactions, setShowRequestCashAdvance }: { transactions: Transaction[], setShowRequestCashAdvance: (show: boolean) => void }) {
  const balance = transactions
    .filter(transaction => transaction.status === "COMPLETED")
    .reduce((acc, transaction) => {
      if (transaction.type === 'ADVANCED') {
        return acc + transaction.amount;
      } else {
        return acc - transaction.amount;
      }
    }, 0);

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl text-gray-600 font-medium">Current Balance</h1>
          <BalanceDisplay balance={balance} />
        </div>
      </div>
      <div className="mt-6">
        <StyledButton
          title="Request a Cash Advance"
          onClick={() => setShowRequestCashAdvance(true)}
        />
      </div>
    </div>
  );
}

function BalanceDisplay({ balance }: { balance: number }) {
  const [animatedBalance, setAnimatedBalance] = useState(0);

  useEffect(() => {
    const duration = 50;
    const start = animatedBalance;
    const end = balance; 
    const increment = (end - start) / 60;
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        clearInterval(timer);
        current = end; 
      }
      setAnimatedBalance(current);
    }, duration / 60); 

    return () => clearInterval(timer);
  }, [animatedBalance, balance]);

  return (
    <span className="text-4xl font-bold block mt-2 transition-transform transform duration-500 ease-out">
      ${animatedBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </span>
  );
}