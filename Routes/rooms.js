import express from 'express'
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailibility,
} from '../Controllers/room.js'
import { verifyAdmin } from '../Utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/:hotelid', verifyAdmin, createRoom)

// UPDATE
router.put('/:id', verifyAdmin, updateRoom)
router.put('/availability/:id', updateRoomAvailibility)

// DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)

// GET
router.get('/:id', getRoom)

// GET ALL
router.get('/', getAllRooms)

export default router
