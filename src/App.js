import { useFetchData } from "./hooks/useFetchData";
function App() {
  const BASE_URL = "https://dog.ceo/api/breeds/image/random";
  const { isLoading, data, error, fetchMoreData } = useFetchData(BASE_URL);
  return (
    <div className='App'>
      <button onClick={fetchMoreData}>Fetch More Data</button>
      <h1>Custom hook to fetch data</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : data?.message ? (
        <img
          style={{ width: "500px", height: "500px" }}
          src={data?.message}
          alt='dog'
        />
      ) : (
        <h2>{error}</h2>
      )}
    </div>
  );
}

export default App;
