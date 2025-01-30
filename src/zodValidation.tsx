import { z } from "zod";

export const UserContent = z.object({
  firstName: z
    .string()
    .min(1, "The first name is required")
    .max(30, "The maximum number of characters is 30"),
  lastName: z
    .string()
    .min(1, "The last name is required")
    .max(30, "The maximum number of characters is 30"),
  email: z.string().min(1, "The email is required").email("Invalid email"),
  phone: z
    .string()
    .min(1, "The phone number is required")
    .max(20, "The maximum number of characters is 20"),
  message: z
    .string()
    .min(1, "The message is required")
    .max(100, "The lenght of the message is 100 characteres"),
});

export type UserContentType = z.infer<typeof UserContent>;
