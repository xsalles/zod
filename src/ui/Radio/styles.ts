import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  gap: 20px;
`

export const Legend = styled.legend`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`

export const ContainerRadios =  styled.div`
  display: flex;
  text-align: center;
  gap: 6px;
  width: fit-content;
`

export const RadioInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 4px;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
`