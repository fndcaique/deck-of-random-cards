import styled from 'styled-components';
import { Character } from '../types/Character';

const CharacterCardStyled = styled.div`
  background-color: #bfbfbf;
  color: #333;
  width: 250px;
  min-height: 320px;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  img {
    border-radius: 5px;
    width: 100%;
  }
`;

type Props = {
  character: Character;
};

function CharacterCard({
  character: { name, image, description, score },
}: Props) {
  return (
    <CharacterCardStyled>
      <img src={image} alt={name} />
      <p>
        <span>Score:</span>
        <strong> {score}</strong>
      </p>
      <p>
        <span>Name:</span>
        <strong> {name}</strong>
      </p>
      <p>
        <span>Description:</span>
        <strong> {description}</strong>
      </p>
    </CharacterCardStyled>
  );
}

export default CharacterCard;
