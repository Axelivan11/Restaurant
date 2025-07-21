import { MenuSide } from '../components/MenuSide'
import { Bars3Icon } from '@heroicons/react/24/solid'


export default function Test() {
  return (
    <div className="flex justify-between pt-8 min-h-screen bg-red-50 w-full mx-4 sm:mx-4 md:mx-8 lg:mx-32 xl:mx-32">
                <MenuSide />
            <nav>
                <Bars3Icon className="size-12 text-[var(--color-red-950)]" />
            </nav>
    </div>
  )
}
