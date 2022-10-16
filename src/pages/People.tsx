// Hooks
import useGetData from "../hooks/useGetData";

// Components
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";

// Interfaces
import { IPage } from "../interfaces/page";
import { IPeople } from "../interfaces/people";

// Data
import { initialState } from "../data/initialState";

export default function People() {
  const [data, isLoading, isError] = useGetData<IPage<IPeople>>(
    "people",
    initialState
  );
  return (
    <>
      {isLoading ? (
        <IsLoading message="All people" />
      ) : isError ? (
        <IsError message="Unable to retrieve people" />
      ) : (
        <main>
          <div className="container">
            <h1>People {data.count}</h1>
            <div className="cards">
              {data.results.map((result) => (
                <div>{result.name}</div>
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
