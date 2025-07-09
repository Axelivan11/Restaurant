import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export default function VerifyCode() {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code === "123456") {
      alert("Código correcto. Acceso concedido.");
      // Aquí puedes redirigir o continuar el login
    } else {
      alert("Código incorrecto.");
    }
  };

  const email = localStorage.getItem("2faEmail") || "tu correo";

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
            <Button type="submit" fullWidth>
              Verificar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
