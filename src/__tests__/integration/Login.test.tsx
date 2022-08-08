import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

const setup = () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
};

describe('Login integration', () => {
  const buttonText = 'Entrar';
  const username = 'Fernando';

  beforeEach(setup);

  test('Quando o input de nome estiver vazio o botão Entrar deve estar desabilitado', async () => {
    const nameInput = screen.getByRole('textbox');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue('');

    const buttonSubmit = screen.getByRole('button', { name: buttonText });
    expect(buttonSubmit).toBeInTheDocument();
    expect(buttonSubmit).toBeDisabled();

    await userEvent.type(nameInput, username);
    expect(buttonSubmit).toBeEnabled();

    await userEvent.clear(nameInput);
    expect(buttonSubmit).toBeDisabled();
  });

  test('Ao preencher o formulário e submete-lo, redireciona para a página cards e exibe o nome de usuário no header', async () => {
    const nameInput = screen.getByRole('textbox');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue('');

    await userEvent.type(nameInput, username);
    expect(nameInput).toHaveValue(username);

    const buttonSubmit = screen.getByRole('button', { name: buttonText });
    expect(buttonSubmit).toBeInTheDocument();

    userEvent.click(buttonSubmit);

    await waitForElementToBeRemoved(() =>
      screen.queryByRole('button', { name: buttonText }),
    );

    const headerUsername = screen.getByTestId('header-username');
    expect(headerUsername).toBeInTheDocument();
  });
});
