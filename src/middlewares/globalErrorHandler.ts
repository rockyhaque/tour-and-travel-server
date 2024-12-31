/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'
import { handleGenericError } from '../helpers/handleGenericError'

type TErrorResponse = {
  success: boolean
  message: string
  error: any
}

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof mongoose.Error.CastError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.message,
      error: err,
    })
  }

  else if(err instanceof mongoose.Error.ValidationError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      sucess: false,
      message: err.message,
      error: err,
    })
  }
  

  //! Not Working Properly - handle duplicate key error
  else if (err.code && err.code === 11000) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.errResponse.errmsg,
      error: err,
    })
  }

  //! Wroking - Alterantive way to handle duplicate key error

  // else if (err.code && err.code === 11000) {
  //   const keyValue = err.keyValue || err.error?.keyValue
  //   const duplicateField = Object.keys(keyValue || {}).join(', ')
  //   const duplicateValue = Object.values(keyValue || {}).join(', ')
  //   res.status(StatusCodes.BAD_REQUEST).json({
  //     success: false,
  //     message: `Duplicate value detected for field: '${duplicateField}' with value: '${duplicateValue}'. Please use a unique value.`,
  //     error: err,
  //   })
  // } 


  else if (err instanceof Error) {
    handleGenericError(err, res);
  }


}
