import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="w-full flex items-center justify-center bg-red-50 h-screen">
      <Outlet />
    </div>
  );
}
