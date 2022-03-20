import styled from 'styled-components';

export const ButtonWrapper = styled.a`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  font-size: 2.4rem;
  color: #fff;
  background-color: var(--yellow-500);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Nova Flat';
  transition: all ease-in-out 0.2s;

  &:hover {
    filter: brightness(0.8);
    text-decoration: none;
  }
`;
