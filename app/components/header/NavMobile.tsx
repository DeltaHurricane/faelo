"use client"
import { useState } from 'react';
import { RoundedButton } from '../buttons';
import { Drawer } from '../drawer';
import { ArrowBackIcon, BarsIcon, PresentationIcon } from '../icons';
import Image from 'next/image';
import { NAVLINKS } from '@/utils/navLinks';
import { usePathname, useRouter } from 'next/navigation';

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const router = useRouter();

  function navigate(url:string){
    router.push(url)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="items-center flex flex-col gap-5 w-full justify-center p-3" >
          <Image
            alt="bgInicial"
            src="/logoFaelo.png"
            height={0}
            width={180}
            style={{
              objectFit: "contain",
            }}
          />
          <div className='border border-black w-full'></div>
          <div className="flex flex-col gap-3 w-full justify-center" >
           
            {NAVLINKS.map((link) => {
              const isActive = pathname === link.url
 
              return (
                <button
                  className="font-serif disabled:bg-Eyellow-300 disabled:text-Eyellow-800 shadow-inner bg-white border p-2 text-lg w-full text-center rounded-md flex gap-3 items-center"
                  onClick={() => navigate(link.url)}
                  disabled={isActive}
                  key={link.name}
                >
                  {link.icon}
                  {link.name}
                </button>
              )
            })}
          </div>
        </div>
      </Drawer>
      <RoundedButton className='px-0 py-0'  onClick={() => setIsOpen(!isOpen)}>
        {<BarsIcon className='w-8 h-8' />}
      </RoundedButton>
    </>
  );
}

