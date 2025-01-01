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

export const AuthController = {
  register,
  login
}
