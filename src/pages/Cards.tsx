import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import CharacterList from '../components/CharacterList';
import AppContext from '../context/AppContext';

const CardsStyled = styled.div`
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Cards() {
  const { characters, loadCharacters } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardsStyled>
      <CharacterList characters={characters} />
    </CardsStyled>
  );
}

export default Cards;
