// src/screens/CommunityScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cd-min-h-screen cd-bg-gray-900 cd-text-white cd-p-4 cd-md:p-6 cd-flex cd-flex-col cd-items-center">
      <h2 className="cd-text-3xl cd-mb-4">Comunidad y Amigos</h2>
      <div className="cd-flex cd-flex-col cd-space-y-4 cd-w-full cd-max-w-md">
        <button className="cd-py-2 cd-px-4 cd-bg-blue-500 cd-rounded cd-hover:bg-blue-600 cd-transition">
          Crear Comunidad
        </button>
        <button className="cd-py-2 cd-px-4 cd-bg-green-500 cd-rounded cd-hover:bg-green-600 cd-transition">
          Chat
        </button>
        <button className="cd-py-2 cd-px-4 cd-bg-yellow-500 cd-rounded cd-hover:bg-yellow-600 cd-transition">
          Ver Rankings
        </button>
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

export default CommunityScreen;
