import React, { useState, useEffect } from "react";
import APODCard from "./APODCard";
import axios from "axios";

export default function APODList() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            const photo = response.data;
            console.log("NASA APOD", photo);
            setPhoto(photo);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        });
        
    },[]);

    return (
        <div className="APOD">
        
            <APODCard apod={photo}/>
        </div>
    );
}