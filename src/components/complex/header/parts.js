import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 150px;
  background: #ccc;
`;

export const LogoWrapper = styled.div`
  color: gray;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
  user-select: none;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  user-select: none;
`;
