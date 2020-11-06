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
      setFilmData(films)
    }
    getFilms()
  }, [])



  return (
    <div>
    <Header title="Popular Series" />
    <h1>Series PAGE</h1>
      {filmData.map(film => <Film title={film.title}/>)}
    <Footer />
    </div>

  )
}

export default Series;