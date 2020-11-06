import React, { useContext, useState, useEffect } from "react";
import StreamCoAPI from "./StreamCoAPI";
import "./App.css";


const Movies = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const userResults = await StreamCoAPI.getUsers();
            setUsers(userResults);
        }
        getUsers();
    }, []);

  return (
   
    <h1>Movies PAGE</h1>
  )
}

export default Movies;