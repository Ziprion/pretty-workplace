import styled from 'styled-components';

import { GhostButton } from '../ghost-button';

export const TextGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.offset(1.5)};

  svg {
    flex-shrink: 0;
  }
`;

export const Title = styled.div`
  padding-bottom: ${({ theme }) => theme.offset(1)};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.additional1};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.large};
  overflow-wrap: break-word;
`;

export const Feedback = styled.div`
  height: ${({ theme }) => theme.lineHeight.small};
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.offset(1)};
  align-items: center;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.offset(1)};
`;

export const CloseButton = styled(GhostButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.additional1};
  }
`;
