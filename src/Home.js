import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Film from "./Film";

const Home = () => {


  return (
    <>
    <Header title="Popular Titles"/>
    <Film />
    <Footer />
    </>
  )
}

export default Home;