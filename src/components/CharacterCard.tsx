import { Character } from '../types/Character';

type Props = {
  character: Character;
};

function CharacterCard({
  character: { name, image, description, score },
}: Props) {
  return (
    <div>
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
    </div>
  );
}

export default CharacterCard;
