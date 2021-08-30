import React, { useState, useEffect } from "react";
import Card from "./Card";

const Section = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  const [pageState, setPageState] = useState(null);

  const fetchData = async () => {
    const res = await fetch(
      "http://localhost:8888/.netlify/functions/getMovies",
      {
        method: "POST",
        body: JSON.stringify({ genre: genre, pageState: pageState }),
      }
    );

    const resBody = await res.json();

    setMovies(resBody.data.movies_by_genre.values);
    setPageState(resBody.data.movies_by_genre.pageState);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2 id="genre">{genre}</h2>
      {movies && (
        <div className="movie-section flex my-8 mx-10 relative transform transition">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
          <div
            onClick={() => {
              setPageState(pageState);
              fetchData();
            }}
            className="p-10 h-full flex py-10 px-2 rounded-tr-md rounded-br-md bg-black cursor-pointer ml-10 hover:bg-hoverColor"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Section;
