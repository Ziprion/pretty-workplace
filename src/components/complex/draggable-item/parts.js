import styled from 'styled-components';

export const Wrapper = styled.div`
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
`;
