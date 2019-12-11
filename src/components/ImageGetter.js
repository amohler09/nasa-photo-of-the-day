import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import { tsPropertySignature } from '@babel/types';

export default function ImageGetter() {
    const [astroData, setAstroData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=BqEDOxHAPDIiQ4XnIyJOPSYBAqE0j1wpbABEWnwu#`)
        .then(response => {
            console.log(response)
            setAstroData(response)
        })//ends .then
        .catch(error => {
            console.log('data not returned', error)
        })//ends .catch
    }, [])//ends useEffect

    return (
        <div className='astro_container'>
            {astroData.map(item => {
                return (
                    <ImageCard
                    date={item.date}
                    explanation={item.explanation}
                    title={item.title}
                    imgUrl={item.url}
                    />//ends ImageCard
                )//ends .map return
            })}
        </div>
    )
}//ends component