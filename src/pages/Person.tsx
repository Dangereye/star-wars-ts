import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import GenericHeader from "../components/layout/header/GenericHeader";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";
import Homeworld from "../components/shared/GetHomeworld";
import Species from "../components/shared/GetSpecies";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";

// Icons
import {
  TbGenderFemale,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderNeutrois,
} from "react-icons/tb";

// Interfaces
import { IPeople } from "../interfaces/people";

// Utilities
import CheckUnits from "../utilities/CheckUnits";
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import { IStarship } from "../interfaces/starship";
import { VscRocket } from "react-icons/vsc";
import { IVehicle } from "../interfaces/vehicle";
import { GiDna1, GiTank } from "react-icons/gi";
import { ISpecies } from "../interfaces/species";
import { IFilm } from "../interfaces/film";
import FormatDate from "../utilities/FormatDate";

export default function Person() {
  const { personId } = useParams();
  const {
    data: person,
    isLoading,
    isError,
  } = useFetchData<IPeople>(`https://swapi.py4e.com/api/people/${personId}`);

  if (isLoading) {
    return <IsLoading message="Person" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve person" />;
  }

  const getPeopleIcon = (person: IPeople) => {
    if (person.gender === "male") {
      return <TbGenderMale />;
    }
    if (person.gender === "female") {
      return <TbGenderFemale />;
    }
    if (person.gender === "hermaphrodite") {
      return <TbGenderHermaphrodite />;
    }
    return <TbGenderNeutrois />;
  };

  const list = [
    { name: "gender", value: person.gender },
    { name: "species", value: <Species url={person.species} /> },
    { name: "birth year", value: person.birth_year },
    { name: "homeworld", value: <Homeworld url={person.homeworld} link /> },
    { name: "height", value: <CheckUnits type="cm" string={person.height} /> },
    { name: "mass", value: <CheckUnits type="kg" string={person.mass} /> },
    {
      name: "hair colour",
      value: <StringToStringArray string={person.hair_color} />,
    },
    {
      name: "skin colour",
      value: <StringToStringArray string={person.skin_color} />,
    },
    {
      name: "eye colour",
      value: <StringToStringArray string={person.eye_color} />,
    },
  ];

  return (
    <>
      <GenericHeader
        name={person.name}
        icon={() => getPeopleIcon(person)}
        list={list}
      />
      <main>
        {/* Films */}
        <AssociatedCards title="films" results={person.films.length}>
          {person.films.map((film, i) => (
            <AssociatedCard<IFilm>
              key={`associated-films-${i}`}
              type="films"
              color={() => "films"}
              image={(data) => (
                <img
                  src={`/images/films/ep${data.episode_id}@600.jpg`}
                  width="600px"
                  height="900px"
                  alt={data.title}
                />
              )}
              heading={(data) => data.title}
              body={(data) => <FormatDate date={data.release_date} />}
              url={film}
            />
          ))}
        </AssociatedCards>

        {/* Starships */}
        <AssociatedCards title="starships" results={person.starships.length}>
          {person.starships.map((starship, i) => (
            <AssociatedCard<IStarship>
              key={`associated-starship-${i}`}
              type="starships"
              color={() => "starships"}
              icon={() => <VscRocket />}
              heading={(data) => data.name}
              body={(data) => data.model}
              url={starship}
            />
          ))}
        </AssociatedCards>

        {/* Vehicles */}
        <AssociatedCards title="vehicles" results={person.vehicles.length}>
          {person.vehicles.map((vehicle, i) => (
            <AssociatedCard<IVehicle>
              key={`associated-vehicles-${i}`}
              type="vehicles"
              color={() => "vehicles"}
              icon={() => <GiTank />}
              heading={(data) => data.name}
              body={(data) => data.model}
              url={vehicle}
            />
          ))}
        </AssociatedCards>
      </main>
    </>
  );
}
