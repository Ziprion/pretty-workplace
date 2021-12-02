import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  background-color: ${({ background }) => background};
  border-radius: 50%;
`;

export const Initials = styled.span`
  color: white;
  font-size: 14px;
  font-family: 'RobotoThin', sans-serif;
  line-height: 14px;
  text-transform: uppercase;
`;
