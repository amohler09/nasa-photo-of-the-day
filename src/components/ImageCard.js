import React from 'react';

const ImageCard = props => {
  console.log(props)

    return(
    <div className="img_container">
      <p>Today's Date: {props.date}</p>
      <img className='astro_photo' src={props.imgUrl} alt='astronomy' />
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
    </div>
        

    )//ends return
}//ends component

export default ImageCard;