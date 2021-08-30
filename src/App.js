import React, { useState, useEffect } from "react";
import Section from "./components/Section";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  const genreIncrement = 4;
  const [genres, setGenres] = useState(null);
  const [limit, setLimit] = useState(genreIncrement);

  const fetchData = async () => {
    const res = await fetch(
      "http://localhost:8888/.netlify/functions/getGenres",
      {
        method: "POST",
        body: limit,
      }
    );

    const resBody = await res.json();

    setGenres(resBody.data.reference_list.values);
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  return (
    <div className="App bg-black text-white">
      <Navbar />
      <HeroSection />
      {genres && (
        <div>
          {genres.map((genre, index) => (
            <Section key={index} genre={genre.value} />
          ))}
        </div>
      )}
      <div
        className="w-screen h-20"
        onMouseEnter={() => {
          setLimit(limit + genreIncrement);
        }}
      ></div>
    </div>
  );
};

export default App;
