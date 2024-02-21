const connectToMongo = require('./db')
const express = require('express')
const bodyParser = require('body-parser');
connectToMongo()
const app = express()
var cors = require('cors')
const fs = require('fs');
const port = 5001;

// respond with "hello world" when a GET request is made to the homepage
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ limit: '20mb' }));
app.use(express.urlencoded({extended: true, limit:"100mb"}));
app.use('./uploads/userProfiles/',express.static('/uploads'))
 
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/adminAuth', require('./routes/admin'))
app.use('/api/userAuth', require('./routes/user'))
app.use('/api/trainer', require('./routes/trainers'))
app.use('/api/order', require('./routes/order'))
app.use('/api/review', require('./routes/reviews'))
app.use('/api/userActions', require('./routes/userActions'))
app.use('/api/product', require('./routes/products'))
app.use('/api/workout', require('./routes/homeWorkouts'))
app.use('/api/challenge', require('./routes/dailyChallenges'))
app.use('/api/adminTrainer', require('./routes/admin'))
app.use('/api/adminPayment', require('./routes/admin'))
app.use('/api/adminFeedback', require('./routes/admin'))
app.use('/api/adminCustomer', require('./routes/admin'))
app.use('/api/adminOrder', require('./routes/admin'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 