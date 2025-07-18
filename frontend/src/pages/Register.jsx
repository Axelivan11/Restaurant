import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { sendVerificationEmail } from "../api/api";
import ErrorAlert from "../components/ErrorAlert";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, lastname, username, email, password)
      const data = await sendVerificationEmail(name, lastname, username, email, password);
      sessionStorage.setItem('email', email);
      navigate("/verify", {
      state: { name, lastname, username, email, password }
    });
    } catch (error) {
      const message = error.response?.data?.message || "Error desconocido";
      setErrorMessage(message);
      setErrorAlert(true);
      console.error("Error al crear usuario:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="bg-register bg-red-50">
        <ErrorAlert
          open={errorAlert}
          onClose={() => setErrorAlert(false)}
          message={errorMessage}
        />
      </div>
      <div className="absolute register-form flex flex-col p-4 rounded-3xl border-[--color-red-950] border-4 items-center justify-center w-[20em] sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[25em] bg-red-50">
        <Typography variant="h4" className="mb-6 text-center text-gray-800">
          Registrate
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Nombre"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Apellido"
            name="Lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <Input
            label="Usuario"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            label="Correo Electrónico"
            name="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Contraseña"
            name="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" fullWidth>
            Registrarse
          </Button>
        </form>
      </div>
    </>


  );
}
