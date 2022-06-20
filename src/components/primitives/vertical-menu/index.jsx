import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  width: max-content;
  min-width: 170px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.secondary1};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const MenuItem = styled.button`
  display: flex;
  gap: ${({ theme }) => theme.offset(0.5)};
  width: 100%;
  padding: ${({ theme }) => `${theme.offset(1)} ${theme.offset(2)}`};
  color: ${({ theme }) => theme.colors.secondary2};
  text-align: left;
  background: ${({ theme }) => theme.colors.additional2};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary3};
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.additional1};
    background: ${({ theme }) => theme.colors.primary3};
  }
`;

export const VerticalMenu = {
  Wrapper: MenuWrapper,
  Item: MenuItem,
};
