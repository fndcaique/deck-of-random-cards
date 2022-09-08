import styled from 'styled-components';
import ButtonGetNextCard from './ButtonGetNextCard';
import ButtonShuffleCards from './ButtonShuffleCards';

const FooterStyled = styled.footer`
  background-color: #0047ba;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <ButtonGetNextCard large />
      <ButtonShuffleCards large />
    </FooterStyled>
  );
}

export default Footer;
