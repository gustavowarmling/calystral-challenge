import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 1rem 3rem;
  border-radius: 4px;
  transform: skew(-25deg);
  text-transform: uppercase;
  font-size: 1.4rem;
  transition: all ease-in-out 0.2s;

  h5 {
    transform: skew(25deg);
  }

  &:hover {
    transform: skew(-25deg) scale(1.2);
  }
`;
