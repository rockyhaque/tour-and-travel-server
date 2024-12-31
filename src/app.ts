import express, { Request, Response } from 'express'
import userRouter from './module/user/user.route'
import tourRouter from './module/tour/tour.route'
import bookingRouter from './module/booking/booking.route'
import { globalErrorHandler } from './middlewares/globalErrorHandler'

const app = express()

// middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)
app.use('/api/booking', bookingRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Home Server is running',
  })
})

// Gobal Error Handling Middleware

app.use(globalErrorHandler)
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

export default app
