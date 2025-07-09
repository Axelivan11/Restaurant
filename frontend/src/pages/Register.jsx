import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    Name: "",
    Lastname: "",
    Username: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    // Redirección condicional (puedes reemplazar con lógica real)
    if (form.Email === "admin@example.com") {
      console.log("Redirigir a 2FA...");
    } else {
      alert("Correo no autorizado para 2FA.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Registro
            </Typography>

            <Input
              label="Nombre"
              name="Name"
              value={form.Name}
              onChange={handleChange}
              required
            />
            <Input
              label="Apellido"
              name="Lastname"
              value={form.Lastname}
              onChange={handleChange}
              required
            />
            <Input
              label="Usuario"
              name="Username"
              value={form.Username}
              onChange={handleChange}
              required
            />
            <Input
              label="Correo Electrónico"
              name="Email"
              type="email"
              value={form.Email}
              onChange={handleChange}
              required
            />
            <Input
              label="Contraseña"
              name="Password"
              type="password"
              value={form.Password}
              onChange={handleChange}
              required
            />
          </CardBody>

          <CardFooter className="pt-0">
            <Button type="submit" fullWidth>
              Registrarse
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
