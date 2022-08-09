import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import mockFetch from '../mockFetch';

const setup = async () => {
  mockFetch();

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const buttonText = 'Entrar';
  const username = 'Fernando';
  const nameInput = screen.getByRole('textbox');
  const buttonSubmit = screen.getByRole('button', { name: buttonText });
  await userEvent.type(nameInput, username);
  await userEvent.click(buttonSubmit);
};

describe('Cards integration', () => {
  beforeEach(setup);

  test('Carrega 5 cards na tela', async () => {
    expect(global.fetch).toHaveBeenCalled();
    const cards = await screen.findAllByTestId('character-card');
    expect(cards).toHaveLength(5);
  });

  test('O botão Puxar aparece na tela', () => {
    const buttonGetMoreCard = screen.getByRole('button', { name: 'Puxar' });
    expect(buttonGetMoreCard).toBeInTheDocument();
  });

  test('Carrega mais 1 card após clicar em Puxar', async () => {
    const buttonGetMoreCard = screen.getByRole('button', { name: 'Puxar' });
    await userEvent.click(buttonGetMoreCard);
    const cards = await screen.findAllByTestId('character-card');
    expect(cards).toHaveLength(6);
  });

  test('É possível carregar mais 3 cards clicando 3 vezes em Puxar', async () => {
    const buttonGetMoreCard = screen.getByRole('button', { name: 'Puxar' });
    expect(buttonGetMoreCard).toBeInTheDocument();
    await userEvent.click(buttonGetMoreCard);
    let cards = await screen.findAllByTestId('character-card');
    expect(cards).toHaveLength(6);
    await userEvent.click(buttonGetMoreCard);
    cards = await screen.findAllByTestId('character-card');
    expect(cards).toHaveLength(7);
    await userEvent.click(buttonGetMoreCard);
    cards = await screen.findAllByTestId('character-card');
    expect(cards).toHaveLength(8);
  });

  test('O botão Puxar é bloqueado após ser clicado 3 vezes', async () => {
    const buttonGetMoreCard = screen.getByRole('button', { name: 'Puxar' });
    await userEvent.click(buttonGetMoreCard);
    await userEvent.click(buttonGetMoreCard);
    await userEvent.click(buttonGetMoreCard);
    expect(buttonGetMoreCard).toBeDisabled();
  });

  test('Clicar mais de 3 vezes no botão Puxar mantem 8 cards sendo exibidos', async () => {
    const buttonGetMoreCard = screen.getByRole('button', { name: 'Puxar' });
    await userEvent.click(buttonGetMoreCard);
    await userEvent.click(buttonGetMoreCard);
    await userEvent.click(buttonGetMoreCard);
    await userEvent.click(buttonGetMoreCard);
    await userEvent.click(buttonGetMoreCard);
    const cards = await screen.findAllByTestId('character-card');
    expect(cards).toHaveLength(8);
  });
});
