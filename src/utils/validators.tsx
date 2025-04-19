import { z } from "zod"

export const matchFormSchema = z.object({
  name: z.string().min(1, "campo obrigatório"),
  interest: z.string().min(1, "campo obrigatório"),
  location: z.string().min(1, "campo obrigatório"),
})
