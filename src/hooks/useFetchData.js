import { useEffect, useState } from "react";
import axios from "axios";
const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, [url]);

  const fetchMoreData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  };
  return {
    isLoading,
    data,
    error,
    fetchMoreData,
  };
};
export { useFetchData };
