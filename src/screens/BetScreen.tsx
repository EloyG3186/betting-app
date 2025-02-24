// src/screens/BetScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Bet {
  id: string;
  event: string;
  odds: string;
  potential: string;
}

const bets: Bet[] = [
  { id: '1', event: 'Partido A vs B', odds: '1.8', potential: '$180' },
  { id: '2', event: 'Partido C vs D', odds: '2.0', potential: '$200' },
];

const BetScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cd-min-h-screen cd-bg-gray-900 cd-text-white cd-p-4 cd-md:p-6">
      <h2 className="cd-text-3xl cd-text-center cd-mb-4">Eventos para Apuestas</h2>
      <div className="cd-space-y-4">
        {bets.map((bet) => (
          <div key={bet.id} className="cd-p-4 cd-bg-gray-800 cd-rounded cd-shadow">
            <h3 className="cd-text-xl">{bet.event}</h3>
            <p className="cd-text-gray-300">Cuota: {bet.odds}</p>
            <p className="cd-text-green-400">Ganancia Potencial: {bet.potential}</p>
            <button className="cd-mt-2 cd-py-2 cd-px-4 cd-bg-blue-500 cd-rounded cd-hover:bg-blue-600 cd-transition">
              Apostar
            </button>
          </div>
        ))}
      </div>
      <button
        className="cd-mt-6 cd-text-gray-400 cd-hover:underline cd-block"
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
    </div>
  );
};

export default BetScreen;
