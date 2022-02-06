import styled, { css } from 'styled-components';

export const AvatarWrapper = styled.div`
  ${({ background }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${background};
    border-radius: 50%;
  `}
`;

export const Initials = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.additional2};
    text-transform: uppercase;
    font-family: 'RobotoThin', sans-serif;
  `}
`;
