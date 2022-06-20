import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button as DefaultButton } from '../button';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin: ${({ theme }) => `${theme.offset(1)} 0`};
`;

const Feedback = styled.div`
  height: ${({ theme }) => theme.lineHeight.medium};
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: ${({ theme }) => theme.offset(1)};
`;

const Button = styled(DefaultButton)`
  min-width: 80px;
  margin-left: ${({ theme }) => theme.offset(1)};
`;

const Space = styled.div`
  height: ${({ theme }) => theme.offset(2)};
`;

const Additional = styled.div`
  margin-top: ${({ theme }) => theme.offset(4)};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.primary1};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.primary2};
  }
`;

export const Form = {
  Wrapper,
  Label,
  Feedback,
  Item,
  ButtonGroup,
  Button,
  Space,
  Additional,
  Link,
};
