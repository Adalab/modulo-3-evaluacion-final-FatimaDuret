import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
import logo from '../images/logo.png'; 

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
   
      <div className="app">
        <header className="app-header">
          <h1>Rick and Morty Characters</h1>
        </header>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Filters setSearch={setSearch} />
                <img src={logo} className="app-logo" alt="logo" /> 
                <CharacterList characters={filteredCharacters} />
              </>
            } 
          />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    
  );
}

export default App;
