import { Container } from "./styles"

interface ButtonProps {
  text: string
}

export default function Button({text}: ButtonProps) {
  return (
    <Container>
        {text}
    </Container>

  )
}
