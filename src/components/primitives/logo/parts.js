import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: ${({ theme, size = 'small' }) => theme.logo[size].width};
  height: ${({ theme, size = 'small' }) => theme.logo[size].height};
  margin-right: ${({ theme }) => theme.offset(1)};
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.additional1};
  font-size: ${({ theme }) => theme.headingFontSize.h6};
  line-height: ${({ theme }) => theme.headingLineHeight.h6};
  text-transform: uppercase;
`;
