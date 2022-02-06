import styled, { css } from 'styled-components';

import { Button } from '@components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 ${theme.offset(1)} ${theme.offset(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.borderRadius};
    height: max-content;
    background: ${theme.colors.additional2};
    box-shadow:
      0px 2px 4px 0px #64748B1A,
      0px 1px 1px 0px #64748B0F;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    width: 100%;
    font-family: 'Roboto';
    font-size: ${theme.fontSize.large};
    line-height: ${theme.lineHeight.large};
    padding: ${theme.offset(1)} ${theme.offset(2)};
    border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.offset(1)} ${theme.offset(2)};
    border-top: 1px solid ${theme.colors.primary3};
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};

    :hover {
      background: ${theme.colors.primary3};
    }
  `}
`;

export const AddItemButton = styled(Button)`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    background: ${theme.colors.additional2};
    border: 1px dashed ${theme.colors.secondary1};
    color: ${theme.colors.secondary1};
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
    
    :hover,
    :focus {
      color: ${theme.colors.primary2};
      background: ${theme.colors.additional2};
      border: 1px dashed ${theme.colors.primary2};
    }
  `}
`;

export const AddItemPlate = styled.div`
  ${({ theme }) => css`
    margin: 0 ${theme.offset(3)} ${theme.offset(2)};
  `}
`;
