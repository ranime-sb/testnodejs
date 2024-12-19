var express = require('express')
var router = express.Router()
const { list, create, update, deleteO,searchByPrice } = require('./ordinateurService')



router.get('/list', list)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteO)
router.get('/recherche', searchByPrice);

module.exports = router