import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  ${({ theme }) => css`
    height: ${theme.logo.size.small};
    margin-right: ${theme.offset(1)};
  `}
`;

export const LogoTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.additional1};
    font-size: ${theme.headingFontSize.h6}; //todo
    line-height: ${theme.headingLineHeight.h6};
    font-family: 'RobotoBold', sans-serif;
    text-transform: uppercase;
  `}
`;
