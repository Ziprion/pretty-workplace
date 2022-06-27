import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.default};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.additional3};
`;

export const WelcomeMessage = styled.div`
  position: absolute;
  top: -100px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.above};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.headingFontSize.h4};
  font-family: 'RobotoThin', sans-serif;
  line-height: ${({ theme }) => theme.headingLineHeight.h4};
`;

export const GreetingMessage = styled.div`
  font-size: ${({ theme }) => theme.headingFontSize.h4};
  line-height: ${({ theme }) => theme.headingLineHeight.h4};
  text-transform: capitalize;
`;

export const AdditionalMessage = styled.div`
  font-size: ${({ theme }) => theme.headingFontSize.h6};
  line-height: ${({ theme }) => theme.headingLineHeight.h6};
`;

export const LoadingWrapper = styled.div`
  max-width: 1200px;
`;
