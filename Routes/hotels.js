import express from 'express'
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getAllHotelsSearch,
  getFeaturedHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from '../Controllers/hotel.js'
import Hotel from '../Models/Hotel.js'
import { createError } from '../Utils/error.js'
import { verifyAdmin } from '../Utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/', verifyAdmin, createHotel)

// UPDATE
router.put('/:id', verifyAdmin, updateHotel)

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

// GET
router.get('/find/:id', getHotel)

// GET ALL
router.get('/allHotelsSearch', getAllHotelsSearch)

router.get('/allHotels', getAllHotels)

router.get('/featuredHotels', getFeaturedHotels)

router.get('/countByCity', countByCity)

router.get('/countByType', countByType)

router.get('/room/:id', getHotelRooms)

export default router
