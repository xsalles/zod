import { Container, SectionForm, TitleAndLogo } from "./App";
import ZodLogo from "./assets/icons/zod.svg";
import Form from "./components/Form/form";

function App() {
  return (
    <Container>
      <TitleAndLogo>
        <h1>Zod</h1>
        <img src={ZodLogo} alt="Zod's logo" />
      </TitleAndLogo>
      <SectionForm>
        <Form/>
      </SectionForm>
    </Container>
  );
}

export default App;
