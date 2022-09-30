import express from 'express'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from '../Controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../Utils/verifyToken.js'

const router = express.Router()

// CHECK AUTHENTICATION
router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('Hello user, you are logged in.')
})

// CHECK USER
router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('Hello user, you are logged in and you can delete your account.')
})

// VERIFY ADMIN
router.get('/verifyadmin/:id', verifyAdmin, (req, res, next) => {
  res.send('Hello admin, you are logged in and you can delete all accounts.')
})

// CREATE
router.post('/', createUser)

// UPDATE
router.put('/:id', verifyUser, updateUser)

// DELETE
router.delete('/:id', verifyUser, deleteUser)

// GET
router.get('/:id', verifyUser, getUser)

// GET ALL
router.get('/', verifyAdmin, getAllUsers)

export default router
