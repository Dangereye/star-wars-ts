import { useParams } from "react-router-dom";
import PersonHeader from "../components/layout/header/PersonHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import useFetchData from "../hooks/useFetchData";

import { IPeople } from "../interfaces/people";

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

  return (
    <>
      <PersonHeader data={person} />
    </>
  );
}
