import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import useAuth from '../hooks/useAuth';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

function Header() {
  const isAuth = useAuth();
  const { username } = useContext(AppContext);

  return (
    <HeaderStyled>
      <h1>Baralho aleatório</h1>
      {isAuth && <span data-testid="header-username">{username}</span>}
    </HeaderStyled>
  );
}

export default Header;
