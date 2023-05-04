import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Image
        alt="bgInicial"
        src="/bg.png"
        width={0}
        height={0}
        sizes="cover"
        style={{
          objectFit: "cover",
          zIndex: -1,
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
        }}
      />
      <main className="wrapper">
        <Box
          position={"relative"}
          height={"calc(100vh - 6rem)"}
          className="full-bleed"
          width={"calc(100% + 1px)"}
        >
          <Box
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            height={["200px", "300px", "500px"]}
            mt={[0, "50px"]}
            width={"100%"}
            minHeight={"250px"}
            minWidth={"250px"}
          >
            <Image
              alt="bgInicial"
              src="/logoFaelo.png"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box
            className="wrapper"
            flexDir={"column"}
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"auto"}
            textAlign={"center"}
            width={"100%"}
            gap="1rem"
            justifyItems="center"
          >
            <Box
              fontFamily={"sans-serif"}
              color={"black"}
              fontSize={"1.5rem"}
              fontWeight={700}
            >
              Of hope mountains value derive justice love suicide society
              mountains god against. Evil suicide overcome dead war law love
              superiority chaos burying christian. Justice snare horror pious
              joy hope free transvaluation.
            </Box>

            <Button
              width={["100%", "100%", "300px"]}
              height={["50px", "50px", "70px"]}
              onClick={() => router.push("/artistas/")}
              colorScheme={"yellow"}
            >
              Conheça nossos artistas
            </Button>
          </Box>
        </Box>
      </main>
    </>
  );
}
