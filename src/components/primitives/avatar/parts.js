import styled, { css } from 'styled-components';

export const AvatarWrapper = styled.div`
  ${({ background }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: ${background};
    border-radius: 50%;
  `}
`;

export const Initials = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    line-height: ${theme.lineHeight.medium};
    font-size: ${theme.fontSize.medium};
    font-family: 'RobotoThin', sans-serif;
  `}
`;
