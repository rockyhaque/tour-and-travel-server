import { z } from 'zod'

const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be provided with string type',
    })
    .email(),
  password: z.string({
    required_error: 'Password must be provided with string type',
  }),
})


export const AuthValidation = {
    loginValidationSchema,
} 