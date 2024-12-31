import { ITour } from './tour.interface'
import Tour from './tour.model'

const createTour = async (payload: ITour) => {
  const result = await Tour.create(payload)
  return result
}

const getTours = async () => {
  const result = await Tour.find()
  return result
}

const getSingleTour = async (id: string) => {
  const result = await Tour.findById(id)
  return result
}

const updateTour = async (id: string, payload: Partial<ITour>) => {
  const result = await Tour.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

const deleteTour = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id)
  return result
}

const getNextSchedule = async(id: string) => {
  const tour = await Tour.findById(id)
  const nextSchedule = tour?.getNextStartDateAndEndDate()

  return {
    tour, nextSchedule
  }
}

export const tourService = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule
}
