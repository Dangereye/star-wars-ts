import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Film() {
  const { filmId } = useParams();
  let id: number = 0;

  useEffect(() => {
    if (filmId) {
      id = +filmId;
    }
  }, []);

  return (
    <main>
      <h1>Film</h1>
    </main>
  );
}
