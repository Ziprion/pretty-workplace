import { Button } from '@components';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.boardPlate.width};
    margin: ${theme.offset(1)};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 1px 4px 0px ${theme.colors.secondary1};
    border-radius: ${theme.borderRadius.small};
    background: ${theme.colors.additional2};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    width: 100%;
    font-family: 'RobotoBold';
    padding: ${theme.offset(0.75)} ${theme.offset(2)};
    border-radius: ${theme.borderRadius.small} ${theme.borderRadius.small} 0 0;
    background: ${theme.colors.primary1};
    color: ${theme.colors.additional2};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 ${theme.borderRadius.small} ${theme.borderRadius.small};
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.offset(1)} ${theme.offset(2)};
    border-bottom: 1px solid${theme.colors.secondary2};
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};

    :last-child {
      border-bottom: none;
    }

    :hover {
      background: ${theme.colors.secondary2};
    }
  `}
`;

export const AddButton = styled(Button)`
  ${({ theme }) => css`
    margin: ${theme.offset(1)} 0;
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.small};
    text-transform: capitalize;
  `}
`;
