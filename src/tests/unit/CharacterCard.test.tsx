import { render, screen } from '@testing-library/react';
import CharacterCard from '../../components/CharacterCard';
import { mockCharacter } from '../mockData';

describe('Character Card unit', () => {
  test('Renderiza nome, imagem, descrição e pontos corretamente', () => {
    render(<CharacterCard character={mockCharacter} />);
    const image = screen.getByRole('img', { name: mockCharacter.name });
    expect(image).toBeInTheDocument();
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent(mockCharacter.name);
    const score = screen.getByTestId('score');
    expect(score).toBeInTheDocument();
    expect(score).toHaveTextContent(String(mockCharacter.score));
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(mockCharacter.description);
  });
});
