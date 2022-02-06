import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoginFormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: ${theme.offset(5)} ${theme.offset(4)} ${theme.offset(3)};
    background: ${theme.colors.additional2};
    border-radius: ${theme.borderRadius}; 
    box-shadow:
      0px 10px 15px -3px #64748B1F,
      0px 4px 6px -2px #64748B0D;
  `}
`;

export const Message = styled.span`
  ${({ theme }) => css`
    margin: ${theme.offset(2)} 0;
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
    color: ${theme.colors.secondary2};
  `}
`;
