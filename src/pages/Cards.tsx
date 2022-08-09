import { useContext, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import AppContext from '../context/AppContext';

function Cards() {
  const { characters, loadCharacters } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}

export default Cards;
