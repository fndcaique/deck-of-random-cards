import { useContext } from 'react';
import AppContext from '../context/AppContext';
import scrollTop from '../helpers/scrollTop';
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
        scrollTop(500);
      }}
    >
      Puxar
    </Button>
  );
}

export default ButtonGetNextCard;
