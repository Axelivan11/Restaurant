import LoadingAnimation from '../../public/Loading.json';
import Lottie from "lottie-react";

export default function Loading() {
  return (
    <div className='vh-100 flex flex-col mx-8 items-center justify-center'>
        <Lottie
            animationData={LoadingAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 300, height: 300 }}
        />
        <p className='text-2xl text-center font-extrabold text-[--color-red-950] mb-4'>Desempacando los sabores que más te gustan 😋🍽️</p>
    </div>
  )
}
