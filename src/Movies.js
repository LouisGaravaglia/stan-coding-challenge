import React, { useState, useEffect } from "react";
import StreamCoAPI from "./StreamCoAPI";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Film from "./Film";

const Movies = () => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const data = await StreamCoAPI.getFilmTitles();
      const recentMovies = data.filter(function (el) {
        return el.releaseYear >= 2010 &&
         el.programType === "movie" 
      });
      const sortedMovies = recentMovies.sort((a, b) => (a.title > b.title) ? 1 : -1).slice(0, 20);
      setFilmData(sortedMovies);
    }
    getFilms();
  }, [setFilmData]);

  return (
    <div>
      <Header title="Popular Movies" />
      <div className="Series-Container">
        {filmData.map(film => <Film title={film.title} image={film.images["Poster Art"].url}/>)}
      </div>
      <Footer />
    </div>
  );

}

export default Movies;