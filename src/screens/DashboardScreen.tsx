// src/screens/DashboardScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cd-min-h-screen cd-bg-gray-900 cd-text-white cd-p-4 cd-md:p-6">
      <h2 className="cd-text-3xl cd-md:text-4xl cd-mb-4 cd-text-center">Dashboard</h2>
      <div className="cd-mb-6 cd-text-center">
        <span className="cd-text-lg cd-md:text-xl cd-text-green-400">Saldo: $1000</span>
      </div>
      <div className="cd-flex cd-flex-col cd-md:flex-row cd-md:space-x-4 cd-space-y-4 cd-md:space-y-0 cd-items-center cd-justify-center">
        <button
          className="cd-py-2 cd-px-4 cd-bg-blue-500 cd-rounded cd-hover:bg-blue-600 cd-transition cd-w-52"
          onClick={() => navigate('/bet')}
        >
          Apuestas
        </button>
        <button
          className="cd-py-2 cd-px-4 cd-bg-green-500 cd-rounded cd-hover:bg-green-600 cd-transition cd-w-52"
          onClick={() => navigate('/wallet')}
        >
          Wallet
        </button>
        <button
          className="cd-py-2 cd-px-4 cd-bg-yellow-500 cd-rounded cd-hover:bg-yellow-600 cd-transition cd-w-52"
          onClick={() => navigate('/community')}
        >
          Comunidad
        </button>
        <button
          className="cd-py-2 cd-px-4 cd-bg-purple-500 cd-rounded cd-hover:bg-purple-600 cd-transition cd-w-52"
          onClick={() => navigate('/profile')}
        >
          Perfil
        </button>
        <button className="cd-text-gray-400 cd-hover:underline cd-block" onClick={() => navigate(-1)}>
        Volver
      </button>
      </div>
    </div>
  );
};

export default DashboardScreen;
