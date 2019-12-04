import * as React from 'react';
import { Container } from './styled';

const AppContainer: React.FC = ({ children }) => (
   <Container>
      {children}
   </Container>
);

export default AppContainer;
