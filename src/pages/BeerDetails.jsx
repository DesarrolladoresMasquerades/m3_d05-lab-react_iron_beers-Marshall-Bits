import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
export default function BeerDetails() {
    const [beer, setBeer] = useState({});
    const params = useParams(); 

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
            .then((response) => setBeer(response.data))
            .catch((error) => console.log(error));
    }, [params.id]);
    return params.id ? (
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
