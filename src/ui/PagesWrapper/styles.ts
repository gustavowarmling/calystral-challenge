import styled from 'styled-components';

import backgroundImage from '../../assets/images/background-image.jpg';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImage}) no-repeat;
  background-position-x: right;
`;
