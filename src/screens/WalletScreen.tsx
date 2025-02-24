// src/screens/WalletScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
}

const transactions: Transaction[] = [
  { id: '1', type: 'Depósito', amount: 500, date: '2025-01-01' },
  { id: '2', type: 'Retiro', amount: -200, date: '2025-01-02' },
];

const WalletScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cd-min-h-screen cd-bg-gray-900 cd-text-white cd-p-4 cd-md:p-6">
      <h2 className="cd-text-3xl cd-text-center cd-mb-4">Wallet</h2>
      <div className="cd-flex cd-flex-col cd-md:flex-row cd-justify-center cd-space-y-4 cd-md:space-y-0 cd-md:space-x-4 cd-mb-6">
        <button className="cd-py-2 cd-px-4 cd-bg-blue-500 cd-rounded cd-hover:bg-blue-600 cd-transition">
          Depositar Fondos
        </button>
        <button className="cd-py-2 cd-px-4 cd-bg-red-500 cd-rounded cd-hover:bg-red-600 cd-transition">
          Retirar Fondos
        </button>
      </div>
      <h3 className="cd-text-xl cd-mb-2">Historial de Transacciones</h3>
      <ul className="cd-space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="cd-p-4 cd-bg-gray-800 cd-rounded">
            <p>
              {transaction.date} - {transaction.type}: ${transaction.amount}
            </p>
          </li>
        ))}
      </ul>
      <button
        className="cd-mt-6 cd-text-gray-400 cd-hover:underline cd-block"
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
    </div>
  );
};

export default WalletScreen;
