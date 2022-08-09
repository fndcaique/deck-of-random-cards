import { createContext } from 'react';
import { Character } from '../types/Character';

export type AppContextType = {
  username: string;
  characters: Character[];
  isLoading: boolean;
  login: (username: string) => void;
  logout: () => void;
  loadCharacters: () => void;
  getNextCharacter: () => void;
  shuffle: () => void;
};

const defaultFunction = () => console.log('default function');

const INITIAL_CONTEXT_VALUE: AppContextType = {
  username: '',
  characters: [],
  isLoading: false,
  login: defaultFunction,
  logout: defaultFunction,
  loadCharacters: defaultFunction,
  getNextCharacter: defaultFunction,
  shuffle: defaultFunction,
};

const AppContext = createContext<AppContextType>(INITIAL_CONTEXT_VALUE);

export default AppContext;
