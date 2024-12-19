var express = require('express')
var router = express.Router()
const { list, create, update, deleteB } = require('./batimentService')

router.get('/list', list)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteB)

module.exports = router
