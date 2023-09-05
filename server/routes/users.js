const
	express = require('express'),
	usersRouter = new express.Router(),
	usersController = require('../controllers/users.js'),
	verifyToken = require('../serverAuth.js').verifyToken

usersRouter.route('/').post(usersController.create)

usersRouter.post('/authenticate', usersController.authenticate)


usersRouter.use(verifyToken)
usersRouter.route('/:id')
	.get(usersController.show)

module.exports = usersRouter