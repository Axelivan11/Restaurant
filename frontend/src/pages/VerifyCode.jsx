import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { verifyCodes } from "../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function VerifyCode() {

  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const email = sessionStorage.getItem('email');


 useEffect(() => {
    if (!email) {
      alert("Debes registrarte primero.");
      navigate("/register");
    }
  }, [email, navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
      const data = await verifyCodes(email, code);
      sessionStorage.removeItem('email');
       alert("Usuario verificado y registrado con éxito.");
      navigate("/login");
    } catch (error) {
      console.error("Error al verificar el código:", error.response?.data || error.message);
      alert("El código no es válido o ha expirado.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h5" color="blue-gray">
              Verificación de Código
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Se envió un código a <span className="font-semibold">{email}</span>
            </Typography>

            <Input
              label="Código de verificación"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </CardBody>

          <CardFooter className="pt-0">
            <Button onClick={handleSubmit} type="submit" fullWidth>
              Verificar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
