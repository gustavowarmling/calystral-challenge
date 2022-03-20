import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Content = styled.main`
  background-color: var(--background-color);
  padding: 2.5rem 4.2rem 1rem;
  border-radius: 4px;

  h1 {
    text-align: center;
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }
`;

export const FormContainer = styled.div`
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
`;
