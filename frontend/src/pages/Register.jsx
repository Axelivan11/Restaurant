import {
  Input,
  Button,
  Typography,
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


  };

  return (
    <>
    <div className="bg-register">
        
    </div>
    <div className="absolute register-form flex flex-col p-4 rounded-2xl border-white border-8 items-center justify-center w-[20em] sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[25em]">
      <Typography variant="h4" className="mb-6 text-center text-gray-800">
        Registrate
      </Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

        <Button type="submit" fullWidth>
          Registrarse
        </Button>
      </form>
    </div>
    </>















/*     <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
    </div> */
  );
}
