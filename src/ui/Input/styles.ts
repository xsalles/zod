import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 55px;
  width: 278px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #000;
`

export const InputContainer = styled.input`
  height: 35px;
  padding: 12px 4px;
  font-size: 14px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #8D8D8D;

  &:focus {
    border-bottom-color: #011C2A;
  }
`
