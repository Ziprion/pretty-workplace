import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => `${theme.offset(2)} ${theme.offset(3)}`};
`;

export const Title = styled.div`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.headingFontSize.h6};
  font-family: 'RobotoBold', sans-serif;
  line-height: ${({ theme }) => theme.headingLineHeight.h6};
`;

export const ActionBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.offset(1)};
  align-items: center;
`;
