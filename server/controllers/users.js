const User = require('../models/User.js')
const signToken = require('../serverAuth.js').signToken

module.exports = {


	show: (req, res) => {
		console.log("Current User:")
		console.log(req.user)
		User.findById(req.params.id, (err, user) => {
			res.json(user)
		})
	},

	create: async (req, res) => {
		console.log(req.body);
		// const user = await User.create(req.body).save();
		// let g = 1;
		User.create(req.body, (err, user) => {
			if (err) {
				console.log(err);
				return res.json({ success: false, code: err.code })
			}
			console.log('ok');
			// once user is created, generate a token to "log in":
			const token = signToken(user)
			res.json({ success: true, message: "User created. Token attached.", token })
		})
	},


	authenticate: (req, res) => {
		console.log(`finding user...${req.body.email}`);
		// check if the user exists
		User.findOne({ email: req.body.email }, (err, user) => {
			// if there's no user or the password is invalid
			if (!user || !user.validPassword(req.body.password)) {
				// deny access
				return res.json({ success: false, message: "Invalid credentials." })
			}

			const token = signToken(user)
			res.json({ success: true, message: "Token attached.", token })
		})
	}
}