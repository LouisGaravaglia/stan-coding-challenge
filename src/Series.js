import React, { useContext, useState, useEffect } from "react";
import StreamCoAPI from "./StreamCoAPI";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Film from "./Film";


const Series = () => {
  const [filmData, setFilmData] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const films = await StreamCoAPI.getFilmTitles();
      console.log("FILMS: ", films);
      console.log("IMAGES: ", films[0].images["Poster Art"].url);
      setFilmData(films)
    }
    getFilms()
  }, [setFilmData])



  return (
    <div>
    <Header title="Popular Series" />
    <h1>Series PAGE</h1>
      {filmData.map(film => <Film title={film.title} image={film.images["Poster Art"].url}/>)}
    <Footer />
    </div>

  )
}

export default Series;