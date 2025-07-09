import { Card, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function MessageLayout({ title = "404 - No encontrado", message = "La página que buscas no existe.", buttonText = "Volver al inicio" }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-10 text-center">
        <Typography variant="h3" color="blue-gray" className="mb-4">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8">
          {message}
        </Typography>
        <Button onClick={() => navigate("/")} color="blue" size="lg">
          {buttonText}
        </Button>
      </Card>
    </div>
  );
}
