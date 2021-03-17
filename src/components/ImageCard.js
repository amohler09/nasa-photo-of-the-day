import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
max-width: 80%;
text-align: center;
margin: 10% auto;
border: 10px double white;
font-family: 'Audiowide', cursive;
font-weight: bold;
padding: 5%;

`;

const Header = styled.h1`
color: white;
font-family: 'Press Start 2P', cursive;
font-size: 2.5rem;
font-weight: bold;
padding-bottom: 2%;
line-height: 75px;
text-shadow: -8px 8px black;

`;

const Date = styled.h2`
color: black;
text-shadow: -3px 3px 5px white;
padding-bottom: 3%;
font-size: 2.5rem;
`;

const Image = styled.img`
max-width: 80%;
box-shadow: -8px 8px 8px white;
margin-bottom: 5%;

`;

const Title = styled.h3`
color: ghostwhite;
font-family: 'Barriecito', cursive;
font-size: 4rem;
text-shadow: -10px 10px 8px slateblue;
margin-top: 3%;
padding-bottom: 2%;

`;

const Explanation = styled.p`
color: black;
background-color: lavender;
box-shadow: -10px 10px 8px slateblue;
font-size: 1rem;
font-family: 'Inconsolata', monospace;
max-width: 90%;
margin: auto;
padding: 2%;
border: 2px dotted purple;
margin-bottom: 3%;

`;

const ImageCard = props => {
  console.log(props)

    return(
    <Container>
      <Header>Astronomy Photo of the Day</Header>
      <Date>Date: {props.date}</Date>
      <Image src={props.imgUrl} alt='astronomy' />
      <Title>{props.title}</Title>
      <Explanation>{props.explanation}</Explanation>
    </Container>
        

    )//ends return
}//ends component

export default ImageCard;