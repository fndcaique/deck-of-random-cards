import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getNRandomItems from '../helpers/getNRandomItems';
import { fetchCharactersFromRandomPage } from '../services/rickAndMortyAPI';
import { removeUser, saveUser } from '../services/userStorage';
import { Character } from '../types/Character';
import AppContext from './AppContext';

type Props = { children: React.ReactElement };

function AppProvider({ children }: Props) {
  const [username, setUsername] = useState('');
  const [eightCharacterList, setEightCharacterList] = useState<Character[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loadCharacters = () => {
    if (!isLoading) {
      setIsLoading(true);
      fetchCharactersFromRandomPage().then((data) => {
        const randomCharacters = getNRandomItems(data, 8);
        setEightCharacterList(randomCharacters);
        setCharacters(randomCharacters.slice(0, 5));
        setIsLoading(false);
      });
    }
  };

  const login = async (name: string) => {
    saveUser(name);
    setUsername(name);
    navigate('/cards');
  };

  const logout = () => {
    removeUser();
    navigate('/');
  };

  const getNextCharacter = () => {
    if (characters.length < 8) {
      setCharacters([eightCharacterList[characters.length], ...characters]);
    }
  };

  const shuffle = () => {
    const shuffledCharacters = [...characters].sort(() => 0.5 - Math.random());
    setCharacters(shuffledCharacters);
  };

  const contextValue = {
    username,
    characters,
    isLoading,
    login,
    logout,
    loadCharacters,
    getNextCharacter,
    shuffle,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
