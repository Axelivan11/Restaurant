// src/components/Sidebar.jsx
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Card,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { label: "Inicio", icon: <HomeIcon className="h-5 w-5" />, to: "/" },
    { label: "Carrito", icon: <ShoppingCartIcon className="h-5 w-5" />, to: "/cart" },
    { label: "Admin", icon: <Cog6ToothIcon className="h-5 w-5" />, to: "/admin" },
  ];

  return (
    <Card className="h-screen w-64 p-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Panel
        </Typography>
      </div>
      <List>
        {links.map(({ label, icon, to }) => (
          <Link key={label} to={to}>
            <ListItem selected={location.pathname === to}>
              <ListItemPrefix>{icon}</ListItemPrefix>
              {label}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
