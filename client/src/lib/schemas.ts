import { z } from "zod";

export const formSchema = z.object({
  githubUsername: z.string().min(1, "GitHub username is required"),
  email: z.string().email("Invalid email address"),
  fromDate: z.date({
    required_error: "From date is required",
  }),
  toDate: z.date({
    required_error: "To date is required",
  })
}).refine((data) => data.fromDate <= data.toDate, {
  message: "End date cannot be earlier than start date",
  path: ["toDate"],
});

export type FormData = z.infer<typeof formSchema>;
