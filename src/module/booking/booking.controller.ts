import { StatusCodes } from 'http-status-codes'
import sendResponse from '../../utils/sendResponse'
import { BookingService } from './booking.service'
import catchAsync from '../../utils/catchAsync'

const createBooking = catchAsync(async (req, res) => {
  const body = req.body
  const result = await BookingService.createBooking(body)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Create booking successfully',
    data: result,
  })
})

export const bookingController = {
  createBooking,
}
