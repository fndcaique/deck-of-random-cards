import styled from 'styled-components';
import { Character } from '../types/Character';
import CharacterCard from './CharacterCard';

const CharacterListStyled = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 500px;
  div {
    margin: 10px 30px;
  }
  @media screen and (min-width: 600px) {
    max-width: 1500px;
  }
`;

type Props = {
  characters: Character[];
};

function CharacterList({ characters }: Props) {
  return (
    <CharacterListStyled>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </CharacterListStyled>
  );
}

export default CharacterList;
