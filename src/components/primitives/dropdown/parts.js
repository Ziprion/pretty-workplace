import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: relative;
  box-shadow:
    0 10px 15px -3px #64748b1f,
    0 4px 6px -2px #64748b0d;
`;

export const Content = styled.div`
  position: absolute;
  top: ${({ theme, direction = 'right' }) => theme.dropdownPosition[direction].top};
  right: ${({ theme, direction = 'right' }) => theme.dropdownPosition[direction].right};
  left: ${({ theme, direction = 'right' }) => theme.dropdownPosition[direction].left};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
