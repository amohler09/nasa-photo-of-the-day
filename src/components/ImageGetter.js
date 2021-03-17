import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';


export default function ImageGetter() {
    const [astroData, setAstroData] = useState(Object);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=BqEDOxHAPDIiQ4XnIyJOPSYBAqE0j1wpbABEWnwu#`)
        .then(response => {
           // console.log(response.data)
           setAstroData(response.data)
        })//ends .then
        .catch(error => {
            console.log('data not returned', error)
        })//ends .catch
    }, [])//ends useEffect

    return (
        <div className='astro_container'>
            <ImageCard
            date={astroData.date}
            explanation={astroData.explanation}
            title={astroData.title}
            imgUrl={astroData.url}
            /> 
        </div>
    )
}//ends component