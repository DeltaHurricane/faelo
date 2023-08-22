import Image from 'next/image'
import { RoundedButton } from './components/buttons'
import { ChevonNextIcon, UsersIcon } from './components/icons'

export default function Home() {
  return (
    <main className="flex min-h-[80vh] min-w-screen max-lg:flex-col max-lg:items-center p-24 max-lg:p-10 gap-4 w-screen justify-center items-start">
      <Image
        alt="logo da Faelo"
        src="/logoFaelo.png"
        height={0}
        width={600}
        className='relative'     
      />
      <div className="flex  flex-col max-w-lg items-center gap-8 max-lg:pt-5 pt-20">
        <p className='font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
        <RoundedButton className='font-serif bg-Eyellow-300 text-Eyellow-800  shadow-md border p-2 text-lg  text-center rounded-lg flex gap-5 items-center transition duration-500 lg:hover:translate-y-[-10px] group'> Conheça os artistas <div className='flex'><ChevonNextIcon className='max-lg:hidden transition duration-500 group-hover:animate-wiggle'/> <ChevonNextIcon className='transition group-hover:animate-wiggle' /></div></RoundedButton>
      </div >
    </main>
  )
}




