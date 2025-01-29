import { useState } from "react";
import {
  Container,
  ContainerRadios,
  Label,
  Legend,
  RadioInput,
} from "./styles";

const options = ["TikTok", "Youtube", "Google", "Twitter"];

export default function Radio() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    setSelectedOption(selectedOption === value ? "0" : value);
  };

  return (
    <Container>
      <Legend>Where do you meet us?</Legend>
      {options.map((option, index) => (
        <ContainerRadios>
          <RadioInput
            key={index}
            value={option}
            type="radio"
            id="radio"
            checked={selectedOption === option}
            onChange={() => handleRadioChange(option)}
          />
          <Label htmlFor={`radio-${index}`}>{option}</Label>
        </ContainerRadios>
      ))}
    </Container>
  );
}
