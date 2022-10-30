import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";

// Components
import FilmHeader from "../components/layout/header/film_header/FilmHeader";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import CardsFetchOwnData from "../components/shared/cards/CardsFetchOwnData";
import GenericCard from "../components/shared/cards/GenericCard";

// Icons
import {
  TbGenderFemale,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderNeutrois,
} from "react-icons/tb";

export default function Film() {
  const { filmId } = useParams();
  const {
    data: film,
    isLoading,
    isError,
  } = useFetchData<IFilm>(`https://swapi.py4e.com/api/films/${filmId}`);

  const getPeopleIcon = (data: IPeople) => {
    if (data.gender === "male") {
      return <TbGenderMale />;
    }
    if (data.gender === "female") {
      return <TbGenderFemale />;
    }
    if (data.gender === "hermaphrodite") {
      return <TbGenderHermaphrodite />;
    }
    return <TbGenderNeutrois />;
  };

  if (isLoading) {
    return <IsLoading message="Film" />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve film" />;
  }

  return (
    <>
      <FilmHeader data={film} />
      <main>
        <CardsFetchOwnData title="people">
          {film.characters.map((character) => (
            <GenericCard<IPeople>
              type="people"
              color={(data) => data.gender}
              icon={getPeopleIcon}
              heading={(data) => data.name}
              species={(data) => data.species}
              url={character}
            />
          ))}
        </CardsFetchOwnData>
      </main>
    </>
  );
}
