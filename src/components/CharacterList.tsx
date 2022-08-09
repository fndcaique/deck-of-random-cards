import styled from 'styled-components';
import { Character } from '../types/Character';
import CharacterCard from './CharacterCard';

const CharacterListStyled = styled.ul`
  list-style: none;
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
