import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewBeer() {
    const [formData, setFormData] = useState({
        name: "Loading data...",
    });
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(
                `https://ih-beers-api2.herokuapp.com/beers/new`,
                formData
            )
            .then((newData) => navigate(`/beers`))
            .catch((error) => navigate(`/beers`));
    }

    function handleChange(event) {
        // event.preventDefault()
        const inputName = event.target.name;
        const value = event.target.value;
        setFormData((formData) => {
            return { ...formData, [inputName]: value };
        });
    }

    return (
        <div>
            <h3>Create a new beer</h3>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                />

                <label>Tagline</label>
                <input
                    type="text"
                    name="tagline"
                    onChange={handleChange}
                    placeholder="tagline"
                />

                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    placeholder="description"
                />

                <label>First Brewed</label>
                <input
                    type="text"
                    name="first_brewed"
                    onChange={handleChange}
                    placeholder="first brewed"
                />

                <label>Brewers</label>
                <input
                    type="text"
                    name="brewers_tips"
                    onChange={handleChange}
                    placeholder="first brewed"
                />

                <label>Attenuation level</label>
                <input
                    type="text"
                    name="attenuation_level"
                    onChange={handleChange}
                    placeholder="attenuation level"
                />

                <label>Contributed by</label>
                <input
                    type="text"
                    name="contributed_by"
                    onChange={handleChange}
                    placeholder="contributed by"
                />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );

}