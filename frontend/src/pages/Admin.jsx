import { MenuSide } from '../components/MenuSide'
import { TabsMenu } from '../components/TabsMenu'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { 
  Carousel,   
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

const Admin = () => {
  return (
    <>
    <div className="flex justify-between mx-4 sm:mx-4 md:mx-8 lg:mx-32 xl:mx-32">
        <MenuSide />
        <div className='cursor-pointer'>
            <ShoppingCartIcon className="size-12 text-[var(--color-red-950)]" />
        </div>
    </div>


    
    </>

  );
};

export default Admin; 
