import {
  Box,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

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
    <>
      <Hide above="lg">
        <div
          className={`header ${scrollDirection === "down" ? "hidebg" : "show"}`}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              position="sticky"
              colorScheme="black"
            />
            <MenuList>
              <MenuItem
                onClick={() => router.push("/")}
                icon={<ExternalLinkIcon />}
              >
                Inicio
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />}>Quem somos</MenuItem>
              <MenuItem
                onClick={() => router.push("/artistas/")}
                icon={<AddIcon />}
              >
                Nossos artistas
              </MenuItem>
              <MenuItem icon={<RepeatIcon />}>Como comprar</MenuItem>
              <MenuItem icon={<EditIcon />}>Contato</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Hide>
      <Show above="lg">
        <div
          className={`header ${scrollDirection === "down" ? "hidebg" : "show"}`}
        >
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
      </Show>
    </>
  );
}
