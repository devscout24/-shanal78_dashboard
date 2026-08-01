import { useSearchParams } from "react-router";

export default function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const removeQuery = (queryIds: string[]) => {
    queryIds.forEach((id) => searchParams.delete(id));
    setSearchParams(searchParams);
  };

  const setQuery = (
    query: {
      queryId: string;
      queryValue: string;
    }[],
  ) => {
    query.forEach(({ queryId, queryValue }) =>
      searchParams.set(queryId, queryValue),
    );
    setSearchParams(searchParams);
  };

  const getQuery = (queryId: string) => searchParams.get(queryId);

  return { removeQuery, setQuery, getQuery };
}
