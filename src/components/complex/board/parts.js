import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  margin: ${({ theme }) => `${theme.offset(1)} ${theme.offset(2)}`};
  background: ${({ theme }) => theme.colors.additional2};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow:
    0 2px 4px 0 #64748b1a,
    0 1px 1px 0 #64748b0f;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => `${theme.offset(1)} ${theme.offset(2)}`};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: 'RobotoBold', sans-serif;
  line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;
