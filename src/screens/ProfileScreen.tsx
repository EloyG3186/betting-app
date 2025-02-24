// src/screens/ProfileScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cd-min-h-screen cd-bg-gray-900 cd-text-white cd-p-4 cd-md:p-6 cd-flex cd-flex-col cd-items-center">
      <img
        src="https://avatar.iran.liara.run/public/boy?username=EloyG"
        alt="Avatar"
        className="cd-w-24 cd-h-24 cd-rounded-full cd-mb-4"
      />
      <h2 className="cd-text-3xl cd-mb-2">Eloy González</h2>
      <p className="cd-mb-4 cd-text-gray-300 cd-text-center">
        Estadísticas: Apuestas ganadas, rachas, etc.
      </p>
      <button className="cd-py-2 cd-px-4 cd-bg-blue-500 cd-rounded cd-hover:bg-blue-600 cd-transition cd-mb-4">
        Editar Perfil
      </button>
      <button className="cd-text-gray-400 cd-hover:underline cd-block" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default ProfileScreen;
