import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: #f0f2fa;
  border-top: 1px solid #e0e1ea;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b9b9b9;
  font-size: 12px;
  text-transform: capitalize;
  user-select: none;
`;

export const Item = styled.div`
  color: #b9b9b9;
  font-size: 12px;
  text-transform: capitalize;
  user-select: none;
`;
