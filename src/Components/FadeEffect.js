import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: scale(.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const FadeIn = ({
    duration = 800,
    delay = 0,
    children,
    ...delegated
  }) => {
    return (
      <Wrapper
        {...delegated}
        style={{
          ...(delegated.style || {}),
          animationDuration: duration + 'ms',
          animationDelay: delay + 'ms',
        }}
      >
        {children}
      </Wrapper>
    );
  };
  const Wrapper = styled.div`
    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${fadeIn};
      animation-fill-mode: backwards;
    }
  `;