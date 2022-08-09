import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { scrollBottom } from '../helpers/scroll';
import Button, { ButtonProps } from './Button';

function ButtonGetNextCard({ large }: ButtonProps) {
  const { characters, getNextCharacter } = useContext(AppContext);
  return (
    <Button
      large={large}
      disabled={characters.length === 8}
      type="button"
      onClick={() => {
        getNextCharacter();
        scrollBottom(500);
      }}
    >
      Puxar
    </Button>
  );
}

export default ButtonGetNextCard;
