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
      const data = await StreamCoAPI.getFilmTitles();
      const recentSeries = data.filter(function (el) {
        return el.releaseYear >= 2010 &&
         el.programType === "series" 
      });
      const sortedSeries = recentSeries.sort((a, b) => (a.title > b.title) ? 1 : -1).slice(0, 20)
      console.log("data: ", data);
      console.log("sorted series: ", sortedSeries);
      setFilmData(sortedSeries)
    }
    getFilms()
  }, [setFilmData])

  return (
    <div>
    <Header title="Popular Series" />
    <div className="Series-Container">
      {filmData.map(film => <Film title={film.title} image={film.images["Poster Art"].url}/>)}
    </div>
    <Footer />
    </div>

  )
}

export default Series;