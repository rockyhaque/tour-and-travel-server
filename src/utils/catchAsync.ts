import { NextFunction, Request, Response } from 'express'
import { RequestHandler } from 'express-serve-static-core'

const catchAsync = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((error) => next(error))
  }
}

export default catchAsync


// catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const result = await userService.getUser()
//       sendResponse(res, {
//         statusCode: StatusCodes.OK,
//         message: 'User getting succesfully',
//         data: result,
//       })
//     } catch (error) {
//       next(error)
//     })
