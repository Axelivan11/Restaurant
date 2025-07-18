import {
  Input,
  Button,
  Checkbox,
} from "@material-tailwind/react";
import { login } from "../api/api";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import ErrorAlert from "../components/ErrorAlert";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
   const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.access_token);
      console.log("Token guardado:", data.access_token);

      // ⏳ Muestra pantalla de carga por 3 segundos
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/admin"); // o "/home"
      }, 3000);
    } catch (error) {
      const message = error.response?.data?.message || "Error desconocido";
      setErrorMessage(message);
      setErrorAlert(true);
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
    }
  };

    // 👇 Pantalla de carga simple
  if (loading) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="loading-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <Loading />
          </motion.div>
    </AnimatePresence>
    );
  }

  return (
    <>
      <div className="bg-banner-login bg-red-50">
        <ErrorAlert
          open={errorAlert}
          onClose={() => setErrorAlert(false)}
          message={errorMessage}
        />
      </div>
      <div className="login-form flex absolute flex-col p-4 rounded-3xl border-[--color-red-950] border-4 items-center justify-center w-[20em]
     sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[25em] bg-red-50 pb-8">
        <h2 className="mb-6 text-center text-[--color-red-950] text-2xl font-bold">Login</h2>
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
            Iniciar sesión
          </Button>
        </form>
      </div>

    </>
  );
}
