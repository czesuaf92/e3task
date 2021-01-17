import React from 'react';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <StyledOverlay>
      <StyledLoader />
    </StyledOverlay>
  )
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 100
`
const StyledLoader = styled.div`
  height: 0;
  width: 0;
  padding: 15px;
  border: 6px solid #ccc;
  border-right-color: #888;
  border-radius: 22px;
  -webkit-animation: spin 1s infinite linear;
  position: absolute;
  left: 50%;
  top: 50%;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
