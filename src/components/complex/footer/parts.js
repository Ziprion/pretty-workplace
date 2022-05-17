import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.offset(0.8)};
  right: ${({ theme }) => theme.offset(4)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 ${({ theme }) => theme.offset(6)};
  padding: ${({ theme }) => theme.offset(1)} 0;
  color: ${({ theme }) => theme.colors.secondary2};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-transform: capitalize;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary1};
`;

export const Item = styled.div`
  margin-right: ${({ theme }) => theme.offset(3)};
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  text-transform: capitalize;
`;
