import {
  Input,
  Button,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { login } from "../api/api";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import ErrorAlert from "../components/ErrorAlert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email,password)
      const data = await login(email, password);
      localStorage.setItem("token", data.access_token);
      console.log("Token guardado:", data.access_token);
      navigate("/home");
    } catch (error) {
      const message = error.response?.data?.message || "Error desconocido";
      setErrorMessage(message);
      setErrorAlert(true);
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="bg-banner-login">
        <ErrorAlert
          open={errorAlert}
          onClose={() => setErrorAlert(false)}
          message={errorMessage}
        />
      </div>
      <div className="login-form flex absolute flex-col p-4 rounded-2xl border-white border-8 items-center justify-center mt-96 w-[20em]
     sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[25em] ">
        <Typography variant="h4" className="mb-6 text-center text-gray-800">Login</Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Contraseña"
            type="password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> <div className="flex items-center justify-between text-sm gap-1">
            <Checkbox label="Recordar" />
            <a href="#" className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Button type="submit" fullWidth>
            Sign In
            Iniciar sesión
          </Button>
        </form>
        <Link to="/register" className="mt-4">
          <Button type="submit">
            Registrate
          </Button>
        </Link>
      </div>

    </>
  );
}
