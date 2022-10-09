import useGetData from "../../hooks/useGetData";

type dataType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export default function Films() {
  const [isLoading, isError, data] = useGetData<dataType[]>("films", []);
  return (
    <main>
      <h1>Films</h1>
      {isLoading && "Loading"}
      {isError && "Oops! Something went wrong"}
      {data.length > 0 &&
        data.map((result) => <div key={result.title}>{result.title}</div>)}
    </main>
  );
}
