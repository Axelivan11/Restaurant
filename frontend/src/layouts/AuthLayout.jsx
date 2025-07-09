import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-6">
        <Outlet />
      </div>
    </div>
  );
}
