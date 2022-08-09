import styled, { css } from 'styled-components';

export type ButtonProps = {
  large: boolean;
};

const Button = styled.button`
  color: #0047ba;
  background-color: #f5f5f5;
  height: 30px;
  font-size: 18px;
  border-style: none;
  border: 2px solid #0047ba;
  border-radius: 10px;
  cursor: pointer;
  :disabled {
    color: #6577ba;
    background-color: #aaa;
    cursor: not-allowed;
  }

  ${(props: { large?: boolean }) =>
    props.large &&
    css`
      width: 120px;
      height: 90%;
    `}
`;

export default Button;
