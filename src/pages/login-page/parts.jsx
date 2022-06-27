import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: ${({ theme }) => `${theme.offset(5)} ${theme.offset(4)} ${theme.offset(3)}`};
  background: ${({ theme }) => theme.colors.additional2};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow:
    0 10px 15px -3px #64748b1f,
    0 4px 6px -2px #64748b0d;
`;

export const Message = styled.span`
  margin: ${({ theme }) => theme.offset(2)} 0;
  color: ${({ theme }) => theme.colors.secondary2};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;
