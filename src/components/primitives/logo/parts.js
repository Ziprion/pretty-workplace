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
    font-size: ${theme.fontSize.large};
    line-height: ${theme.lineHeight.large};
    font-family: 'RobotoBold', sans-serif;
    text-transform: uppercase;
  `}
`;
