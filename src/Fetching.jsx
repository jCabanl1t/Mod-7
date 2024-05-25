import { useEffect, useState } from "react";

function Manga({number}) {
  const [imageURL, setImageURL] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/jCabanl1t/3bbf3e461e94acb4dd4c0067f0cc1f00/raw/d071f67acf71433edf6b77316d21428a6152c112/Manga.json", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Failed to fetch image");
        }
        return response.json();
      })
      .then((data) => {
        setImageURL(data.Manga[number].image);
        setTitle(data.Manga[number].title);
        setDescription(data.Manga[number].description);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [number]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h1>{title}</h1>
      <img src={imageURL} alt={"placeholder text"} />
      <h3>{description}</h3>
    </>
  );
}

export default Manga;
