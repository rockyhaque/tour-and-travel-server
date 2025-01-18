import { Router } from 'express'
import { tourController } from './tour.controller'
import { upload } from '../../helpers/fileUploadHelpers'

const tourRouter = Router()

tourRouter.post(
  '/create-tour',
  upload.single('file'),
  tourController.createTour
)

tourRouter.post('/schedule/:id', tourController.getNextSchedule)
tourRouter.get('/:id', tourController.getSingleTour)
tourRouter.put('/:id', tourController.updateTour)
tourRouter.delete('/:id', tourController.deleteTour)
tourRouter.get('/', tourController.getTours)

export default tourRouter
