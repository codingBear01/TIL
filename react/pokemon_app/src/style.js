import styled from 'styled-components';

export const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
`;

export const TitleSectionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5db9ff;
  width: 100%;
  height: 300px;
  color: white;

  div {
    margin-bottom: 33.5px;
  }

  input {
    width: 200px;
    height: 40px;
    padding-left: 10px;
    border: 1px solid #4ca8ee;
    border-radius: 10px;
    font-size: 18px;
  }

  button {
    width: 180px;
    height: 60px;
    margin: 20px;
    border: none;
    border-radius: 10px;
    background-color: #006cbf;
    color: white;
    font-size: 18px;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const pokemonNameNullMsg = styled.span`
  color: ;
`;
