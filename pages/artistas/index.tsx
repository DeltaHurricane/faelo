import Link from "next/link";
import { artists } from "../../mocks/artistasmock";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

function ArtistList() {
  return (
    <>
      <div
        className="backgroundColor"
        style={{
          zIndex: -1,
          background: "aliceblue",
        }}
      ></div>

      <Box
        min-height={"calc(100vh - 6rem)"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"start"}
        alignItems="center"
        gap={"30px"}
        pt={"30px"}
        pb={"50px"}
        width={'100vw'}
      >
        <Text
          fontFamily={"sans-serif"}
          color={"black"}
          fontSize={"1.5rem"}
          fontWeight={700}
        >
          Escolha um Artista:
        </Text>
        <ul className="artists-list">
          {artists.map((artist) => (
            <li key={artist.id}>
              <Link className="artists-card" href={`/artistas/${artist.id}`}>
                <img
                  className="artists-image"
                  src={artist.imageUrl}
                  alt={artist.name}
                />
              </Link>
              <h2 className="artists-name">{artist.name}</h2>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
}

export default ArtistList;
