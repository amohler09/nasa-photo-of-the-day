import React from 'react';
import styled from 'styled-components';


const DateStyle = styled.p`
color: red;
background-color: blue;

`;

const Container = styled.p`
max-width: 80%;
`;

const ImageCard = props => {
  console.log(props)

    return(
    <Container>
      <DateStyle>Today's Date: {props.date}</DateStyle>
      <img className='astro_photo' src={props.imgUrl} alt='astronomy' />
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
    </Container>
        

    )//ends return
}//ends component

export default ImageCard;