import { MenuSide } from '../components/MenuSide'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Admin = () => {
  return (
    <>
    <div className="flex justify-between pt-8 mx-4 sm:mx-4 md:mx-8 lg:mx-32 xl:mx-32">
        <MenuSide />
        <div className='cursor-pointer'>
            <ShoppingCartIcon className="size-12 text-[var(--color-red-950)]" />
        </div>
    </div>
    
    </>

  );
};

export default Admin; 
