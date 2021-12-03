import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary2};
`;

export const LoginFormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin-bottom: ${theme.offset(10)};
    padding: ${theme.offset(5)} ${theme.offset(4)} ${theme.offset(3)};
    background: ${theme.colors.additional2};
    border-radius: ${theme.borderRadius.medium}; 
    box-shadow: 0px 0px 3px 0px ${theme.colors.secondary1};
  `}
`;

export const Message = styled.span`
  ${({ theme }) => css`
    margin: ${theme.offset(3)} 0;
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
    color: ${theme.colors.secondary1};
  `}
`;
