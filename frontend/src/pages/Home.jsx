import React from 'react';
import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default function Home(){
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Página de Inicio</h1>
        <p className="text-gray-700 text-center mb-4">
          Este es un ejemplo de página básica con React, Tailwind y Material UI.
        </p>
         <a
            href="/admin"
            className="text-blue-500 hover:underline font-medium"
          >admin jejje</a>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          Botón de Material UI
        </Button>
       
      </div>
    </div>
  );
};