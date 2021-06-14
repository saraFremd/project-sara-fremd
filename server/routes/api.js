const router = require('express').Router()
const user = require('../controllers/user')

router.post('/createUser', user.createUser)
router.get('/getUser/:id' , user.getUser)
router.put('/updateUser', user.updateUser)
router.delete('/deleteUser/:id', user.deleteUser)
router.get('/getAllUsers', user.getAllUsers)

module.exports = router