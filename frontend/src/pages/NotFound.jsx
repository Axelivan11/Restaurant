import MessageLayout from "../layouts/MessageLayout";

export default function NotFound() {
  return (
    <MessageLayout
      title="404 - Página no encontrada"
      message="Lo sentimos, la página que buscas no está disponible."
      buttonText="Ir al inicio"
    />
  );
}
