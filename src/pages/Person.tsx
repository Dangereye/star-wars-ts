import {
  TbGenderFemale,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderNeutrois,
} from "react-icons/tb";
import { useParams } from "react-router-dom";
import GenericHeader from "../components/layout/header/GenericHeader";
import PersonHeader from "../components/layout/header/PersonHeader";
import Homeworld from "../components/shared/GetHomeworld";
import Species from "../components/shared/GetSpecies";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import useFetchData from "../hooks/useFetchData";

import { IPeople } from "../interfaces/people";
import CheckUnits from "../utilities/CheckUnits";
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";

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
    </>
  );
}
