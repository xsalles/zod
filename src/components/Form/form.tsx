import { zodResolver } from "@hookform/resolvers/zod";
import { UserContent, UserContentType } from "../../zodValidation";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button/button";
import Input from "../../ui/Input/input";
import Radio from "../../ui/Radio/select";
import { Container } from "./styles";

// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserContentType>({
    resolver: zodResolver(UserContent),
  });

  const onSubmit = (data: UserContentType) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>Feedback</h2>
      <fieldset>
        <Input name="firstName" text="First Name" register={register} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <Input name="lastName" text="Last Name" register={register} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </fieldset>
      <fieldset>
        <Input name="email" text="Email" register={register} />
        {errors.email && <p>{errors.email.message}</p>}
        <Input name="phone" text="Phone Number" register={register} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </fieldset>
      <Radio />
      <fieldset>
        <Input
          name="message"
          text="Message"
          widthContainer="595px"
          register={register}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </fieldset>

      <Button text="Send Message" />
    </Container>
  );
}
