import { useContext, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import AppContext from '../context/AppContext';

function Cards() {
  const { characters, loadCharacters, getNextCharacter } =
    useContext(AppContext);

  useEffect(() => {
    loadCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <CharacterList characters={characters} />
      <div>
        <button
          disabled={characters.length === 8}
          type="button"
          onClick={getNextCharacter}
        >
          Puxar
        </button>
      </div>
    </div>
  );
}

export default Cards;
