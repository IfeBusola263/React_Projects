import { useState, useEffect } from "react";


export default function useFetch(fetchFn, initialValue){
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(initialValue);

    // fetch the previous places picked by user
  useEffect(() => {
    async function fetchUserPlaces() {
      setIsFetching(true)

      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError({
          message:
            error.message ||
            "Could not fetch data",
        });
      }

      setIsFetching(false);
    }

    fetchUserPlaces();

  }, [fetchFn]);

  return {
    data,
    isFetching,
    error,
    setData
  };
}