/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/dataSlice";

const MovieComp = () => {
  const count = useSelector((state: any) => state.movie.count);
  const isLoading = useSelector((state: any) => state.movie.isLoading);
  const error = useSelector((state: any) => state.movie.error);
  const names = useSelector((state: any) => state.movie.names);
  const dispatch = useDispatch();

  const handleFetchMovies = () => {
    dispatch(fetchMovies());
  };

  return (
    <>
      <div>Movie Componenet demo with thunk...</div>
      <p>Total movies : {count}</p>
      {isLoading ? (
        <span style={{ color: "blue" }}>"Loading..."</span>
      ) : (
        <div>
          <button onClick={handleFetchMovies}>Fetch Movies</button>
          {names.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      )}
      {error && <p> Error: {error}</p>}
    </>
  );
};

export default MovieComp;
