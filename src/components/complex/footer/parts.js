import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 100%;
    margin: 0 ${theme.offset(6)};
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondary2};
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.small};
    text-transform: capitalize;
    padding: ${theme.offset(1)} 0;
    border-top: 1px solid ${theme.colors.secondary1};
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.offset(3)};
    color: ${theme.colors.secondary1};
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
    text-transform: capitalize;
  `}
`;
