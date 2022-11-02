// Icons
import {
  TbGenderFemale,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderNeutrois,
} from "react-icons/tb";

// Interfaces
import { IPeople } from "../interfaces/people";

export const getPeopleIcon = (person: IPeople) => {
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
