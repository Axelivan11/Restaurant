import WelcomeAnimation from '../../public/WelcomeAnimation.json';
import Lottie from "lottie-react";
import {
  Button
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
        <div className="bg-welcome bg-red-50">

        </div>
        <div className='absolute flex flex-col mx-8 items-center justify-center sm:w-[100vw] md:w-[80vw] lg:w-[80vw] xl:w-[30vw]'>
            <Lottie
            animationData={WelcomeAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 370, height: 370 }}
        />
        <div>
            <p className='text-5xl font-extrabold text-[--color-red-950] mb-4'>Descubre el sabor de lo hecho en casa</p>
            <p className='text-xl font-semibold text-[--color-red-950]'>Explora cientos de opciones... ¡Tú encárgalo, nosotros lo preparos!</p>
        </div>
        <Link to="/login" className="my-4 w-[100%]">
            <Button type="submit" fullWidth>
                Iniciar sesión
            </Button>
        </Link>
        <Link to="/register" className="mb-8 w-[100%]">
            <Button type="submit" fullWidth>
                Registrate
            </Button>
        </Link>
        </div>
    </>

  );
};

export default Welcome; 
