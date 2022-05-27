import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";


export default function Beers() {
    const [beers, setBeers] = useState([]);


    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => setBeers(response.data))
    }, []);

    return (
        <div>
            <NavBar />
            <h1>List of Beers</h1>
            <div className="beers-container">
                {beers.map((beer) => {
                    return (
                        <Link to={`/${beer._id}`}>
                            <div key={beer._id} className="beer-container">
                                <div>
                                    <img height={200} src={beer.image_url} alt="" />
                                </div>
                                <div className="description">
                                    <h3>{beer.name}</h3>
                                    <p>{beer.tagline}</p>
                                    <p>Contributed by: {beer.contributed_by}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}