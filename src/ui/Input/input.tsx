import { Container, Label, InputContainer } from "./styles";

interface InputProps {
  text: string;
}

export default function Input( {text} : InputProps ) {
  return (
    <Container>
        <Label>{text}</Label>
        <InputContainer/>
    </Container>
  )
}
