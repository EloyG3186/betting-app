// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementa la lógica de autenticación
    navigate('/dashboard');
  };

  return (
    <div className="cd-flex cd-flex-col cd-items-center cd-justify-center cd-min-h-screen cd-bg-gray-900 cd-px-4">
      <h2 className="cd-text-3xl cd-md:text-4xl cd-text-white cd-mb-6 cd-text-center">Iniciar Sesión</h2>
      <div className="cd-w-full cd-max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="cd-w-full cd-p-3 cd-mb-4 cd-rounded cd-border cd-border-gray-700 cd-bg-gray-800 cd-text-white cd-placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="cd-w-full cd-p-3 cd-mb-4 cd-rounded cd-border cd-border-gray-700 cd-bg-gray-800 cd-text-white cd-placeholder-gray-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="cd-w-full cd-py-3 cd-bg-blue-500 cd-text-white cd-rounded cd-hover:bg-blue-600 cd-transition"
          onClick={handleLogin}
        >
          Entrar
        </button>
        <button
          className="cd-mt-4 cd-text-gray-400 cd-hover:underline cd-block"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
