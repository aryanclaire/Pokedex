import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = () => {
    const pokemons = [
        { id: 38, name: 'Ninetales', type: 'Fire', base_experience: 177 },
        { id: 39, name: 'Jigglypuff', type: 'Normal/Fairy', base_experience: 95 },
        { id: 251, name: 'Celebi', type: 'Psychic/Grass', base_experience: 270 },
        { id: 282, name: 'Gardevoir', type: 'Psychic/Fairy', base_experience: 259 },
        { id: 300, name: 'Skitty', type: 'Normal', base_experience: 52 },
        { id: 301, name: 'Delcatty', type: 'Normal', base_experience: 140 },
        { id: 315, name: 'Roselia', type: 'Grass/Posion', base_experience: 140 },
        { id: 334, name: 'Altaria', type: 'Dragon/Flying', base_experience: 172 },
    ];

    const shuffledPokemons = [...pokemons].sort(() => Math.random() - 0.5);

    const hand1 = shuffledPokemons.slice(0, pokemons.length / 2);
    const hand2 = shuffledPokemons.slice(pokemons.length / 2);

    const totalExperienceHand1 = hand1.reduce((total, pokemon) => total + pokemon.base_experience, 0);
    const totalExperienceHand2 = hand2.reduce((total, pokemon) => total + pokemon.base_experience, 0);

    return (
        <div className="main">
            <div className="pokedex">
                <h1>Pokemon Battle</h1>
                <div className="hand">
                    <div className="cards">
                        {hand1.map((pokemon) => (
                            <div key={pokemon.id} className="card">
                                <Pokecard {...pokemon} />
                            </div>
                        ))}
                    </div>
                    <div className="text-box">
                    <h3>Hand 1</h3>
                    <p>Total Base Experience: {totalExperienceHand1}</p>
                    {totalExperienceHand1 > totalExperienceHand2 && <p>This hand is the winner!</p>}
                    </div>
                </div>
                <div className="hand">
                    <div className="cards">
                        {hand2.map((pokemon) => (
                            <div key={pokemon.id} className="card">
                                <Pokecard {...pokemon} />
                            </div>
                        ))}
                    </div>
                    <div className="text-box">
                    <h3>Hand 2</h3>
                    <p>Total Base Experience: {totalExperienceHand2}</p>
                    {totalExperienceHand2 > totalExperienceHand1 && <p>This hand is the winner!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokedex;
