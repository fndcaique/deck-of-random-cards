import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import useAuth from '../hooks/useAuth';
import ButtonGetNextCard from './ButtonGetNextCard';
import ButtonShuffleCards from './ButtonShuffleCards';

const HeaderStyled = styled.header`
  cursor: default;
  background-color: #0047ba;
  color: #f5f5f5;
  display: flex;
  justify-content: center;
  div.container {
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 1200px;
    span {
      font-size: 22px;
    }
    button {
      display: none;
    }
    @media screen and (min-width: 1000px) {
      button {
        display: block;
      }
    }
  }
`;

function Header() {
  const isAuth = useAuth();
  const { username, characters } = useContext(AppContext);

  if (!isAuth) {
    return (
      <HeaderStyled>
        <h1>Cartas</h1>
      </HeaderStyled>
    );
  }
  return (
    <HeaderStyled>
      <div className="container">
        <h1>Cartas</h1>
        <ButtonGetNextCard large />
        {isAuth && (
          <span data-testid="header-cards-number">{characters.length}</span>
        )}
        <ButtonShuffleCards large />
        {isAuth && <span data-testid="header-username">{username}</span>}
      </div>
    </HeaderStyled>
  );
}

export default Header;
