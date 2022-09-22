import styled from 'styled-components';
import React from 'react';

const StyledMessageDiv = styled.div`
  color: ${(props) => (props.message === 'red' ? 'red' : 'blue')};
`;

export const MessageDiv = ({ message }) => {
  return <StyledMessageDiv message={message}>{message}</StyledMessageDiv>;
};
