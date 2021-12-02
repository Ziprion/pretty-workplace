import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: white;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 30px;
  margin: 0 8px;
`;

export const LogoTitle = styled.span`
  color: black;
  font-size: 20px;
  font-family: 'RobotoBold', sans-serif;
  text-transform: uppercase;
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
  text-transform: capitalize;
`;
