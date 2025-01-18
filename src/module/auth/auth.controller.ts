import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body)

  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.CREATED,
    message: 'User has been registered successfully',
    data: result,
  })
})

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body)

  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.CREATED,
    message: 'User log in successfully',
    token: result.token,
    data: result.verifiedUser,
  })
})

const forgetPassword = catchAsync(async (req: Request, res: Response) => {

  await AuthService.forgetPassword(req.body)

  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.ACCEPTED,
    message: 'Reset password link sent to your email!',
    data: null,
  })
})

const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.retsetPassword(req.body)

  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.ACCEPTED,
    message: 'Password reset sucessfull',
    data: result,
  })
})

export const AuthController = {
  register,
  login,
  forgetPassword,
  resetPassword
}
