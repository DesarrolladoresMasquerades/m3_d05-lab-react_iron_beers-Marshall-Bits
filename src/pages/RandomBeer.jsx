import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
export default function RandomBeer() {
    const [beer, setBeer] = useState({});

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => setBeer(response.data))
            .catch((error) => console.log(error));
    }, [beer.id]);
    return beer.name ? (
        <div>
            <NavBar />
            <div key={beer._id} className="card">
                <img src={beer.image_url} alt="beer" />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    ) : (
        <div>Loading beer data...</div>
    );
}
