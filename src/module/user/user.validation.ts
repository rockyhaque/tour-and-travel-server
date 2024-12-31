import { z } from 'zod' 

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided with string type',
    })
    .min(3)
    .max(50),

  age: z
    .number({
      required_error: 'Age must be provided with number type',
    })
    .int()
    .positive(),

  email: z.string({
    required_error: 'Email must be provided with string type',
  }),

  photo: z
    .string({
      required_error: 'Photo must be provided with string type',
    })
    .optional(),
})

export const userValidation = {
    userValidationSchema
}