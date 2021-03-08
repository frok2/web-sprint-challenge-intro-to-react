import React, { useState } from 'react';
import styled from 'styled-components';

const Character = (props) => {

    let { character } = props;
    
    let keys = Object.keys(character);

    console.log(character)
  return (
    <Card>
      <P><b>Name: </b>{character.name}</P>
      <P><b>Height: </b>{character.height}</P>
      <P><b>Mass: </b>{character.mass}</P>
      <P><b>Birth year: </b>{character.birth_year}</P>
      
    </Card>
  );
};

const P = styled.p`
    margin: 0
`

const Card = styled.div`
    margin: 25px;
    background-color: rgba(0, 80, 0, 0.3);
`

export default Character;// Write your Character component here
