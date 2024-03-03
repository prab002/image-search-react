import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 4rem;
  font-family: sans-serif;
  color: #1d3557;
`;

export const SearchConainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: 2px solid #b616ba;
  background: transparent;
  margin: 12px;
  padding: 7px;
  border-radius: 12px;

  &:hover {
    border: 2px solid #00d0cb;
    background-color: #00d0cb;
    color: #fff;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 200px;
  height: 26px;
  border-radius: 12px;
  padding: 12px;
`;

export const OutPutContainer = styled.div`
  width: 100%;
`;

export const ImageOutput = styled.img`
  width: 100%;
  max-width: 200px;
  height: 200px;
  margin: 1px;
`;
