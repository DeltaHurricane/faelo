import { artists } from "../../../mocks/artistasmock";
import { useRouter } from "next/router";

function ArtistProfile() {
  const router = useRouter();
  const artista = router.query.artista as unknown as string;
  const artist = artists.find((artist) => artist.id === parseInt(artista, 10));
  console.log(artista);

  if (!artist) {
    return <h1>Artist not found</h1>;
  }

  return (
    <div>
      <img className="artist-image" src={artist.imageUrl} alt={artist.name} />
      <h1 className="artist-name">{artist.name}</h1>
      <p className="artist-bio">{artist.bio}</p>
      <h2>Albums:</h2>
      <ul>
        {artist.albums.map((album) => (
          <li key={album}>{album}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistProfile;
