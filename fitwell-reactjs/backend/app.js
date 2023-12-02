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
app.use('/api/UserAuth', require('./routes/user'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 