import React from 'react';
import { ErrorContainer, ErrorHeader, ErrorLink, ErrorText } from './ErrorElements';


const ErrorComponent = () => {

  return (
    <>
      <ErrorContainer>
        <ErrorHeader>404 Error</ErrorHeader>
        <ErrorText>This page does not exist :(</ErrorText>
        <ErrorLink to='/'>Go back to the home page</ErrorLink>
      </ErrorContainer>
    </>
  );  
}

export default ErrorComponent;