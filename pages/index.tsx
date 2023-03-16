import Image from "next/image";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Box
          position={"relative"}
          height={"calc(100vh - 6rem)"}
          className="full-bleed"
          width={"calc(100% + 1px)"}
        >
          <Image
            alt="bgInicial"
            src="/bg.png"
            fill
            sizes="cover"
            style={{ objectFit: "cover", zIndex: -1 }}
          />
          <Box
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            height={["400px", "500px"]}
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
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"auto"}
            textAlign={"center"}
            width={"100%"}
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
          </Box>
        </Box>
        <div> blasdfasd</div>
        <div> blasdfasd</div>
        <div> blasdfasd</div>
        <div> blasdfasd</div>
        <div> blasdfasd</div>
        <div> blasdfasd</div>
      </main>
    </>
  );
}
