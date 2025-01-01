import QueryBuilder from '../../builder/QueryBuilder'
import { ITour } from './tour.interface'
import Tour from './tour.model'

const createTour = async (payload: ITour) => {
  const result = await Tour.create(payload)
  return result
}

const getTours = async (query: Record<string, unknown>) => {
  // console.log(query)

  // const queryObj = { ...query }

  // const excludedFields = [
  //   'searchTerm',
  //   'page',
  //   'limit',
  //   'sortOrder',
  //   'sortBy',
  //   'sortOrder',
  //   'fields',
  // ]
  // excludedFields.forEach((el) => delete queryObj[el])

  // const searchTerm = query?.searchTerm || ''

  // const searchableFields = ['name', 'startLocation', 'locations']

  // // const result = await Tour.find({
  // //   $or: [
  // //     {name: { $regex: searchTerm, $options: 'i' }},
  // //     {startLocation: { $regex: searchTerm, $options: 'i' }},
  // //     {locations: { $regex: searchTerm, $options: 'i' }},
  // //   ]
  // // })

  // //! only use the await at the last function

  // // const result = await Tour.find({
  // //   $or: searchableFields.map(field => ({
  // //     [field]: { $regex: searchTerm, $options: 'i' }
  // //   }))
  // // })

  // const searchQuery = Tour.find({
  //   $or: searchableFields.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // })

  // const filterQuery = searchQuery.find(queryObj)

  // const page = Number(query?.page) || 1
  // const limit = Number(query?.limit) || 10
  // const skip = (page - 1) * limit

  // const paginatedQuery = filterQuery.skip(skip).limit(limit)

  // let sortStr

  // if (query?.sortBy && query?.sortOrder) {
  //   const sortBy = query?.sortBy
  //   const sortOrder = query?.sortOrder
  //   sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
  // }

  // const sortQuery = paginatedQuery.sort(sortStr)

  // let fields = '-__v'

  // if (query?.fields) {
  //   fields = (query.fields as string).split(',').join(' ')
  // }

  // const result = await sortQuery.select(fields)
  // return result



  // ! Applying the QueryBuilder

  const searchableFields = ['name', 'startLocation', 'locations']
  const tours = new QueryBuilder(Tour.find(), query)
    .search(searchableFields)
    .filter()
    .paginate()
    .sort()
    .select()

  const result = await tours.modelQuery
  return result

  // ! Default
  // const result = await Tour.find({})
  // return result
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

const getNextSchedule = async (id: string) => {
  const tour = await Tour.findById(id)
  const nextSchedule = tour?.getNextStartDateAndEndDate()

  return {
    tour,
    nextSchedule,
  }
}

export const tourService = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
