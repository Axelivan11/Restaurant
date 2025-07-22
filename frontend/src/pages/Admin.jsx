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
    <div className="flex justify-between pt-8 mx-4 sm:mx-4 md:mx-8 lg:mx-32 xl:mx-32">
        <MenuSide />
        <div className='cursor-pointer'>
            <ShoppingCartIcon className="size-12 text-[var(--color-red-950)]" />
        </div>
    </div>
    
    <section className='flex justify-center pt-8 mx-4 sm:mx-4 md:mx-8 lg:mx-32 xl:mx-32'>
        <div className="w-full max-w-5xl">
            <Carousel className="rounded-xl aspect-[16/9] overflow-hidden" autoplay={true} autoplayDelay={10000} loop={true} transition={{ duration: 3 }}>
            <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
            />
            </Carousel>
        </div>
    </section>

    <section className='flex justify-center pt-8 mx-4 sm:mx-4 md:mx-8 lg:mx-32 xl:mx-32'>
        <div className="w-full max-w-5xl">
            <TabsMenu />
        </div>
    </section>

    <section className='pt-8 mx-4 sm:mx-4 md:mx-8 lg:mx-32 xl:mx-32'>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 w-full">
            <Card className=" bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food1.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody className='px-6 py-2'>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="Disponible" className="rounded-full bg-light-green-100 text-green-600" />                    
                    </div>

                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>
            <Card className="bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food2.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody className='px-6 py-2'>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="mb-1 text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="No disponible" className="rounded-full bg-amber-100 text-amber-800" />                    
                    </div>
                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>
            <Card className="bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food3.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody className='px-6 py-2'>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="Disponible" className="rounded-full bg-light-green-100 text-green-600" />                    
                    </div>

                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>
            <Card className="bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food4.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody className='px-6 py-2'>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="No disponible" className="rounded-full bg-amber-100 text-amber-800" />                    
                    </div>

                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>

            <Card className="bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food1.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="Disponible" className="rounded-full bg-light-green-100 text-green-600" />                    
                    </div>

                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>
            <Card className="bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food2.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="mb-1 text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="No disponible" className="rounded-full bg-amber-100 text-amber-800" />                    
                    </div>
                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>
            <Card className="bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food3.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="Disponible" className="rounded-full bg-light-green-100 text-green-600" />                    
                    </div>

                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>
            <Card className="bg-red-50">
                <CardHeader color="blue-gray" className="relative h-56" floated={false}>
                    <img
                    src="../../public/food4.jpg"
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <div className='flex items-center justify-between'>
                        <Typography variant="h1" className="text-[var(--color-red-950)]">
                            $200
                        </Typography>
                        <Chip value="No disponible" className="rounded-full bg-amber-100 text-amber-800" />                    
                    </div>

                    <Typography variant="h4" color="blue-gray" className="text-[var(--color-red-950)]">
                        Salmon con soya
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[var(--color-red-950)] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Ordenar
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </section>


    
    </>

  );
};

export default Admin; 
