const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'check, check, check.' })
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'YAHOOO!!' })
})

router.put('/', (req, res) => {
  res.status(200).json({ message: 'YAHOOO!!' })
})

router.delete('/', (req, res) => {
  res.status(200).json({ message: 'YAHOOO!!' })
})

module.exports = router