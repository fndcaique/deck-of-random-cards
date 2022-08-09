import { useContext, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import AppContext from '../context/AppContext';

const LoginStyled = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    color: #0047ba;
    border: 2px solid #0047ba;
    border-radius: 10px;
    height: 150px;
    width: 250px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    input {
      border-style: none;
      width: 100%;
      color: #0047ba;
      border-bottom: 2px solid #0047ba;
      font-size: 20px;
      height: 30px;
      padding: 7px;
      :focus {
        outline: none;
      }
    }
  }
`;

function Login() {
  const [name, setName] = useState('');
  const { login } = useContext(AppContext);

  const isFormValid = () => name.length > 0;
  return (
    <LoginStyled>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          login(name);
        }}
      >
        <div>
          <label htmlFor="name">Informe seu nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <Button type="submit" disabled={!isFormValid()}>
          Entrar
        </Button>
      </form>
    </LoginStyled>
  );
}

export default Login;
