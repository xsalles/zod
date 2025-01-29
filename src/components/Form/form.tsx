import Input from "../../ui/Input/input";
import { Container } from "./styles";

export default function Form() {
  return (
    <Container>
        <h2>Feedback</h2>
        <fieldset>
            <Input text="First Name"/>
            <Input text="Last Name"/>
        </fieldset>
        <fieldset>
            <Input text="Email"/>
            <Input text="Phone Number"/>
        </fieldset>
    </Container>
  )
}
