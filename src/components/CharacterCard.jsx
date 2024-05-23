import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <Link to={`/character/${character.id}`}>More details</Link>
    </div>
  );
}

export default CharacterCard;