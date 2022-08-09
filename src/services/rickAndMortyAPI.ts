import { Character } from '../types/Character';
import genRandomIntegerNumber from './genRandomIntegerNumber';

const NUMBERS_OF_PAGES = 40; // real = 42
const BASE_URL = 'https://rickandmortyapi.com/api/character';

type CharacterResponse = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

const transformCharacters = (characters: CharacterResponse[]) => {
  return characters.map(({ id, image, name, status, species, gender }) => ({
    id,
    image,
    name,
    description: `${species} ${gender} ${status}`,
    score: genRandomIntegerNumber(0, 10),
  })) as Character[];
};

export const fetchCharactersFromRandomPage = async () => {
  const response = await fetch(
    `${BASE_URL}/?page=${genRandomIntegerNumber(1, NUMBERS_OF_PAGES)}`,
  );
  const { results } = await response.json();
  return transformCharacters(results);
};
