import React, { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Card,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { login } from "../api/api";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(email,password)
      const data = await login(email, password);
      localStorage.setItem("token", data.access_token);
      console.log("Token guardado:", data.access_token);
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
      alert("Credenciales incorrectas");
    }
  };



  return (
    <Card className="p-6 shadow-md rounded-lg">
      <Typography variant="h4" className="mb-6 text-center text-gray-800">
        Sign In
      </Typography>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex items-center justify-between text-sm">
          <Checkbox label="Remember me" />
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>

      <div className="mt-6">
        <p className="text-xs text-gray-600">
          Don’t have an account yet?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </Card>
  );
}
