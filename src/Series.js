import React, { useContext, useState, useEffect } from "react";
import StreamCoAPI from "./StreamCoAPI";
import "./App.css";


const Series = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const userResults = await StreamCoAPI.getUsers();
            setUsers(userResults);
        }
        getUsers();
    }, []);

  return (

    <h1>Series PAGE</h1>

  )
}

export default Series;