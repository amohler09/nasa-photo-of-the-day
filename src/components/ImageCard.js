import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
max-width: 70%;
text-align: center;
margin: auto;
margin-top: 10%;
border: 2px dashed red;
font-family: comic sans;
font-weight: bold;
padding: 5%;

`;

const Header = styled.h1`

`;

const Date = styled.h2`
color: red;
`;

const Image = styled.img`
max-width: 70%;

`;

const Title = styled.h3`
color: blue;
`;

const Explanation = styled.p`
color: green;

`;

const ImageCard = props => {
  console.log(props)

    return(
    <Container>
      <Header>Astronomy Photo of the Day</Header>
      <Date>Today's Date: {props.date}</Date>
      <Image src={props.imgUrl} alt='astronomy' />
      <Title>{props.title}</Title>
      <Explanation>{props.explanation}</Explanation>
    </Container>
        

    )//ends return
}//ends component

export default ImageCard;