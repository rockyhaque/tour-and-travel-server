import { Request, Response } from 'express'
import { tourService } from './tour.service'

const createTour = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const result = await tourService.createTour(body)

    res.send({
      status: true,
      message: 'Tour has been created',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    })
  }
}

const getTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours(req.query)

    res.send({
      status: true,
      message: 'Tours getting succesfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    })
  }
}

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await tourService.getSingleTour(id)

    res.send({
      status: true,
      message: 'Single tour getting succesfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await tourService.updateTour(id, body)

    res.send({
      status: true,
      message: 'Tour updated succesfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    })
  }
}

const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await tourService.deleteTour(id)

    res.send({
      status: true,
      message: 'Tour deleted succesfully',
      result: {},
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    })
  }
}

const getNextSchedule = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await tourService.getNextSchedule(id)

    res.send({
      status: true,
      message: 'Getting Next Tour Schedule succesfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    })
  }
}

export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule
}
