"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NAVLINKS } from '@/utils/navLinks';



 
export function Navigation() {
  const pathname = usePathname()
  const router = useRouter();
  
  return (
    <>
      <Image
        alt="bgInicial"
        src="/logoFaelo.png"
        height={0}
        width={160}
        style={{
          cursor: "pointer",
          objectFit: "contain",
          position: "absolute"
        }}
        onClick={() => router.push("/")}
      />

      <div className="flex gap-6 w-full justify-center" >
        {NAVLINKS.map((link) => {
          const isActive = pathname === link.url
          console.log(pathname)
          console.log( link.url)
 
          return (
            <button
              className="font-serif  disabled:text-Eyellow-600 bg-inherit rounded-2xl items-center w-fit focus:outline-none text-lg p-2"
              onClick={() => router.push(link.url)}
              disabled={isActive}
              key={link.name}
            >
       
              {link.name}
            </button>
          )
        })}
      </div>
    </>
  )
}