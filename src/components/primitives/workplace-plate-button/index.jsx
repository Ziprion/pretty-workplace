import styled from 'styled-components';

import { Button } from '../button';

export const WorkplacePlateButton = styled(Button)`
  width: ${({ theme }) => theme.workplacePlate.addButtonWidth};
  height: ${({ theme }) => theme.workplacePlate.addButtonHeight};
  margin: ${({ theme }) => `${theme.offset(15)} auto`};
  color: ${({ theme }) => theme.colors.secondary1};
  background: ${({ theme }) => theme.colors.additional3};
  border: 2px dashed ${({ theme }) => theme.colors.secondary1};

  svg {
    width: 50px;
    height: 50px;
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary2};
    background: ${({ theme }) => theme.colors.additional3};
    border: 2px dashed ${({ theme }) => theme.colors.primary2};
  }
`;
