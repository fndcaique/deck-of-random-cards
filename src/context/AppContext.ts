import { createContext } from 'react';

export type AppContextType = {
  username: string;
  login: (username: string) => void;
  logout: () => void;
};

const defaultFunction = () => console.log('default function');

const INITIAL_CONTEXT_VALUE: AppContextType = {
  username: '',
  login: defaultFunction,
  logout: defaultFunction,
};

const AppContext = createContext<AppContextType>(INITIAL_CONTEXT_VALUE);

export default AppContext;
