const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
const members = require('./Members')
const logger = require('./middleware/logger')

//Init middleware
app.use(logger)

//Route to get all members
app.get('/api/members', (req, res) => res.json(members))

//Route to get single member
//app.get()

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
