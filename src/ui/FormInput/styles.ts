import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #8c8c8c;
  width: 100%;
  gap: 0.2rem;

  label {
    max-width: 18px;

    img {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: transparent;
  border: 0;
  color: #fff;
`;

export const ShowPasswordButton = styled.button`
  width: 18px;
  background-color: transparent;

  img {
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--error);
`;
