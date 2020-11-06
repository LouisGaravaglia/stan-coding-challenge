import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Placeholder from "./Placeholder";

const Home = () => {


  return (
    <>
    <Header title="Popular Titles"/>
    <div className="Series-Container">
      <Placeholder title="SERIES" subtitle="Popular Series"/>
      <Placeholder title="MOVIES" subtitle="Popular Movies"/>
    </div>
    <Footer />
    </>
  )
}

export default Home;