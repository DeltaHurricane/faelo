import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<null | "down" | "up">(
    "up"
  );
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    console.log(lastScrollY);

    // const updateScrollDirection = () => {
    //   const scrollY = window.pageYOffset;
    //   const direction = scrollY > lastScrollY ? "down" : "up";
    //   if (
    //     direction !== scrollDirection &&
    //     (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
    //   ) {
    //     setScrollDirection(direction);
    //   }
    //   lastScrollY = scrollY > 0 ? scrollY : 0;
    // };

    const topOfThePage = () => {
      const scrollY = window.pageYOffset;

      if (scrollY === 0) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
    };

    window.addEventListener("scroll", topOfThePage); // add event listener
    return () => {
      window.removeEventListener("scroll", topOfThePage); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export function Header() {
  const scrollDirection = useScrollDirection();
  const router = useRouter();
  return (
    <div className={`header ${scrollDirection === "down" ? "hidebg" : "show"}`}>
      <Image
        alt="bgInicial"
        src="/logoFaelo.png"
        height={0}
        width={180}
        style={{
          cursor: "pointer",
          objectFit: "contain",
          position: "absolute",
          left: 0,
        }}
        onClick={() => router.push("/")}
      />
      <Box display={"flex"} gap={"20px"}>
        {/*@ts-ignore */}
        <Button
          borderRadius={20}
          onClick={() => router.push("")}
          colorScheme="yellow"
          background={"#FDC400"}
        >
          Quem somos
        </Button>
        {/*@ts-ignore */}
        <Button
          borderRadius={20}
          onClick={() => router.push("/artistas/")}
          colorScheme="yellow"
          background={"#FDC400"}
        >
          Nossos artistas
        </Button>
        {/*@ts-ignore */}
        <Button
          borderRadius={20}
          onClick={() => router.push("")}
          colorScheme="yellow"
          background={"#FDC400"}
        >
          Como comprar
        </Button>
        {/*@ts-ignore */}
        <Button
          borderRadius={20}
          onClick={() => router.push("")}
          colorScheme="yellow"
          background={"#FDC400"}
        >
          Contato
        </Button>
      </Box>
    </div>
  );
}
