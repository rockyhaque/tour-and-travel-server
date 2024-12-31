import { Router } from 'express'
import { tourController } from './tour.controller'

const tourRouter = Router()

tourRouter.post("/create-tour", tourController.createTour)
tourRouter.post("/schedule/:id", tourController.getNextSchedule)
tourRouter.get("/:id", tourController.getSingleTour)
tourRouter.put("/:id", tourController.updateTour)
tourRouter.delete("/:id", tourController.deleteTour)
tourRouter.get("/", tourController.getTours)

export default tourRouter
