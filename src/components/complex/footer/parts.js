import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.offset(1)} 0;
    background: ${theme.colors.secondary2};
    border-radius: 1px;
    box-shadow: 4px 4px 4px 2px ${theme.colors.secondary1};
`}
`;

export const Navigation = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.offset(0.8)};
    right: ${theme.offset(4)};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondary1};
    font-size: ${theme.fontSize.xSmall};
    text-transform: capitalize;
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.offset(3)};
    color: ${theme.colors.secondary1};
    font-size: ${theme.fontSize.medium};
    text-transform: capitalize;
  `}
`;
