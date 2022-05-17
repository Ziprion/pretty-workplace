import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding: ${({ theme }) => `${theme.offset(1)} ${theme.offset(3)}`};
  background: ${({ theme }) => theme.colors.additional2};
  box-shadow:
    0 4px 6px 0 #64748b1f,
    0 2px 4px 0 #1f29370f;
`;
