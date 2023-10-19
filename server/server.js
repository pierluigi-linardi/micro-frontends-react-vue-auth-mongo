const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_HOST = process.env.MONGODB_HOST || 'mongodb://localhost:27017/mfe',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js')


const cors = require('cors');
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_HOST, { useNewUrlParser: true }, (err) => {
	console.log(`MongoDB Connected: ${MONGODB_HOST}`)
	if (err) {
		console.log(err);
	}
})
app.use(cors());
app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({ message: "API/" })
})

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
