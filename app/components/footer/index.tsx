import Image from "next/image";
import Link from "next/link";
import { Bubbles } from "./Bubbles";
import styles from './Bubbles.module.css'
import { InstagramIcon } from "../icons";


export function Footer() {

  return (
    <div>
      <div className={styles.footer}>
        <Bubbles />
        <div
          className={`${styles.content} justify-between px-4`}
          color={"black"}
        >
          <div
            className="items-start flex justify-center flex-col gap-1"
          >
            <Link
              href="https://www.instagram.com/enactus.ufesvitoria/?hl=pt"
              target="_blank"
              className="flex gap-2 items-center transition duration-500 hover:translate-y-[-5px] "
            >
              <InstagramIcon className="text-black h-8 w-8" />
              <p className="text-2xl underline">Instagram</p>
            </Link>
            <p className="text-2xl">Contato:</p>
            <p className="text-md">+55 27 99958-1478</p>
            <p className="text-md">emaioAleatorio@gmail.com</p>
            
          </div>
          <Link
            href="https://www.instagram.com/enactus.ufesvitoria/?hl=pt"
            target="_blank"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="logo"
              src="/logo.png"
              height={0}
              width={130}
              style={{
                objectFit: "contain",
              }}
              className="transition duration-500 hover:translate-y-[-10px] "
            />

            <p className="text-sm">©2023 ENACTUS UFES VITORIA</p>
          </Link>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={10}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
