// src/components/Navbar.jsx
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <MTNavbar className="mx-auto max-w-full px-4 py-2 rounded-none shadow-md">
      <div className="flex items-center justify-between">
        <Typography variant="h6" color="blue-gray">
          Mi Aplicación
        </Typography>

        <div className="flex items-center gap-4">
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-5 w-5" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <UserCircleIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </MTNavbar>
  );
}
