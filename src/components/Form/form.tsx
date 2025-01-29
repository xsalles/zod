import Button from "../../ui/Button/button";
import Input from "../../ui/Input/input";
import Radio from "../../ui/Radio/select";
import { Container } from "./styles";

export default function Form() {
  return (
    <Container>
      <h2>Feedback</h2>
      <fieldset>
        <Input text="First Name" />
        <Input text="Last Name" />
      </fieldset>
      <fieldset>
        <Input text="Email" />
        <Input text="Phone Number" />
      </fieldset>
      <Radio />
      <fieldset>
        <Input text="Message" widthContainer="595px" />
      </fieldset>

      <Button text="Send Message" />
    </Container>
  );
}
