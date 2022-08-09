import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { scrollTop } from '../helpers/scroll';
import Button, { ButtonProps } from './Button';

function ButtonShuffleCards({ large }: ButtonProps) {
  const { shuffle } = useContext(AppContext);
  return (
    <Button
      large={large}
      type="button"
      onClick={() => {
        shuffle();
        scrollTop(500);
      }}
    >
      Embaralhar
    </Button>
  );
}

export default ButtonShuffleCards;
