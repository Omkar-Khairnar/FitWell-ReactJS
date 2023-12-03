const connectToMongo = require('./db')
const express = require('express')
connectToMongo()
const app = express()
var cors = require('cors')
const port = 5001;

// respond with "hello world" when a GET request is made to the homepage
app.use(cors())
app.use(express.json())
 
app.get('/', (req, res) => {
  res.send('hello world')  
})

app.use('/api/adminAuth', require('./routes/admin'))
app.use('/api/userAuth', require('./routes/user'))
app.use('/api/trainer', require('./routes/trainers'))
app.use('/api/order', require('./routes/order'))
app.use('/api/review', require('./routes/reviews'))
app.use('/api/userActions', require('./routes/userActions'))
app.use('/api/workout', require('./routes/homeWorkouts'))
app.use('/api/challenge', require('./routes/dailyChallenges'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 