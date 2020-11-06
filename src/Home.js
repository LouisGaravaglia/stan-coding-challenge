import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Placeholder from "./Placeholder";
import  {Link} from "react-router-dom";

const Home = () => {

  return (
    <>
      <Header title="Popular Titles"/>
      <div className="Series-Container">
        <Link to="/series">
          <Placeholder title="SERIES" subtitle="Popular Series"/>
        </Link>
        <Link to="/movies">
          <Placeholder title="MOVIES" subtitle="Popular Movies"/>
        </Link>
      </div>
      <Footer />
    </>
  );

};

export default Home;