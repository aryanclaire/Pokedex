import React from 'react';

const Pokecard = ({ id, name, type, baseExperience }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` ; 

  return (
    <div className="pokecard">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>Base Experience: {baseExperience}</p>
    </div>
  );
};

export default Pokecard;