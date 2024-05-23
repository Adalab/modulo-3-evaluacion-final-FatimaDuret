import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';

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
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Filters setSearch={setSearch} />
                <CharacterList characters={filteredCharacters} />
              </>
            } 
          />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
