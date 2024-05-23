import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Episodes: {character.episode.length}</p>
      <p>Status: {character.status}</p>
    </div>
  );
}

export default CharacterDetail;