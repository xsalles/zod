import { Container, Label, InputContainer } from "./styles";

interface InputProps {
  text: string;
  widthContainer?: string;
}

export default function Input( {text, widthContainer} : InputProps ) {
  return (
    <Container widthContainer={widthContainer}>
        <Label>{text}</Label>
        <InputContainer/>
    </Container>
  )
}
