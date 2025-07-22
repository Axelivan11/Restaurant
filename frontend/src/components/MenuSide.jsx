import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from '@heroicons/react/24/solid';
import { PresentationChartBarIcon } from '@heroicons/react/24/solid';

export const MenuSide = () => {

  const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
        <Bars3Icon className="cursor-pointer size-12 text-[var(--color-red-950)]" onClick={openDrawer} />
        <Drawer open={open} onClose={closeDrawer} className="p-4 bg-red-50" size={500}>
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" className="text-[var(--color-red-950)]">
                    Toca una opción para continuar, Axel 👇
                </Typography>
                <IconButton className="text-[var(--color-red-950)]" variant="text" color="red-500" onClick={closeDrawer}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </IconButton>
            </div>
            <List className="flex font-bold text-[var(--color-red-950)] ">
                <Link to="/home">        
                    <ListItem className="shadow-sm shadow-red-100">
                        <ListItemPrefix>
                            <HomeIcon  className="size-10" />
                        </ListItemPrefix>
                        Home
                    </ListItem>
                </Link>  
                <Link to="/admin">        
                    <ListItem className="shadow-sm shadow-red-100">
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="size-10" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>
            </List>
        </Drawer>
      </>
  )
}
