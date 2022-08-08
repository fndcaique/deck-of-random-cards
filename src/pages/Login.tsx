import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const { login } = useContext(AppContext);

  const isFormValid = () => name.length > 0;
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          login(name);
        }}
      >
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button type="submit" disabled={!isFormValid()}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
