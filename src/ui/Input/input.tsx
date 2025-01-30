import {  UseFormRegister } from "react-hook-form";
import { Container, Label, InputContainer } from "./styles";
import { UserContentType } from "../../zodValidation";

interface InputProps {
  text: string;
  widthContainer?: string;
  register: UseFormRegister<UserContentType>;
  name: keyof UserContentType;
}

export default function Input({
  text,
  widthContainer,
  register,
  name,
}: InputProps) {
  return (
    <Container widthContainer={widthContainer}>
      <Label>{text}</Label>
      <InputContainer {...register(name)}  />
    </Container>
  );
}
