import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { sendVerificationEmail } from "../api/api";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, lastname, username, email, password)
      const data = await sendVerificationEmail(name, lastname, username, email, password);
      console.log(data.data)
      sessionStorage.setItem('email', email);
      navigate("/verify");
    } catch (error) {
      console.error("Error al crear usuario:", error.response?.data || error.message);
      alert("Ocurrio un error al crear usuario");
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
