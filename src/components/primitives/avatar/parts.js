import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme, size = 'small' }) => theme.avatar[size].width};
  height: ${({ theme, size = 'small' }) => theme.avatar[size].height};
  background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.colors.primary1};
  border-radius: 50%;
`;

export const Initials = styled.span`
  color: ${({ theme }) => theme.colors.additional2};
  font-family: 'RobotoThin', sans-serif;
  text-transform: uppercase;
`;
