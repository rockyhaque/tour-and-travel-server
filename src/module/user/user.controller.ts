
// import User from './user.model'
import { userService } from './user.service'
import sendResponse from '../../utils/sendResponse'

import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'

const createUser = catchAsync(async (req, res) => {
  const payload = req.body

  const result = await userService.createUser(payload)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User has been created',
    data: result,
  })
})

const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUser()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User getting succesfully',
    data: result,
  })
})

const getSingleUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const result = await userService.getSingleUser(userId)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Single User getting succesfully',
    data: result,
  })
})

const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const body = req.body
  const result = await userService.updateUser(userId, body)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User updated succesfully',
    data: result,
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  await userService.deleteUser(userId)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User deleted succesfully',
    data: {},
  })
})

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
