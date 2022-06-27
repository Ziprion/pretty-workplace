import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => `${theme.offset(1.5)} ${theme.offset(2)}`};
  text-align: center;
  background: ${({ theme }) => theme.colors.additional2};
  border-top: ${({ theme }) => `1px solid ${theme.colors.primary3}`};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;

export const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.additional2};
  border-top: ${({ theme }) => `1px solid ${theme.colors.primary3}`};

  :hover {
    background: ${({ theme }) => theme.colors.primary3};
  }

  :last-child {
    border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
  }
`;

export const Link = styled.a`
  display: flex;
  gap: ${({ theme }) => theme.offset(1)};
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => `${theme.offset(1.5)} ${theme.offset(6)} ${theme.offset(1.5)} ${theme.offset(2)}`};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.offset(2)};
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Icon = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;
