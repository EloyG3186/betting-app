// src/screens/LandingScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cd-flex cd-flex-col cd-items-center cd-justify-center cd-min-h-screen cd-bg-gray-900 cd-px-4">
      <h1 className="cd-text-4xl cd-md:text-5xl cd-text-white cd-mb-8 cd-text-center">
        Bienvenido a Apuestas entre amigos
      </h1>
      <div className="cd-flex cd-flex-col cd-md:flex-row cd-md:space-x-4 cd-space-y-4 cd-md:space-y-0 cd-w-full cd-max-w-md">
        <button
          className="cd-w-full cd-py-3 cd-bg-blue-500 cd-text-white cd-rounded cd-hover:bg-blue-600 cd-transition"
          onClick={() => navigate('/login')}
        >
          Iniciar Sesión
        </button>
        <button
          className="cd-w-full cd-py-3 cd-bg-green-500 cd-text-white cd-rounded cd-hover:bg-green-600 cd-transition"
          onClick={() => navigate('/register')}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
