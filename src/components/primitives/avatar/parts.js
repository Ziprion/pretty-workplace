import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ background }) => background};
  border-radius: 50%;
`;

export const Initials = styled.div`
  color: white;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  text-transform: capitalize;
  user-select: none;
`;
