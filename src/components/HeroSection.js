import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [movie, setMovie] = useState(null);
  const pageState = null;

  const fetchData = async () => {
    const res = await fetch(
      "http://localhost:8888/.netlify/functions/getMovies",
      {
        method: "POST",
        body: JSON.stringify({ genre: "Action", pageState: pageState }),
      }
    );

    const resBody = await res.json();
    const movies = resBody.data.movies_by_genre.values;
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="hero w-full p-0 mb-40">
      {movie && (
        <div>
          <video
            className="w-full float-left top-0"
            muted
            controls
            autoPlay={true}
            loop
            src={movie.thumbnail}
            type="video/mp4"
          ></video>
          <div className="info absolute mt-40 ml-10">
            <h3>{movie.synopsis}</h3>
            <div className="w-80 flex">
              <div className="rounded-md cursor-pointer bg-white text-black py-2 px-4 m-1">
                <span>
                  <i className="fas fa-play"></i>
                </span>{" "}
                Play
              </div>
              <div className="rounded-md cursor-pointer bg-hoverColor text-black py-2 px-4 m-1">
                <span>
                  <i class="fas fa-info-circle"></i>
                </span>{" "}
                More Info
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
