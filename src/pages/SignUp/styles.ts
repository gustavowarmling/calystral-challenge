import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 356px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
`;

export const AccountNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: 1.4rem;
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TermsOfService = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;

  h6 {
    color: var(--error);
  }
`;
