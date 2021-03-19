const express = require('express')
const path = require('path')
const app = express()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 5000
const members = require('./Members')

const logger = require('./middleware/logger')

//Init middleware
app.use(logger)

//Init handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Home page render
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members,
  })
)

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Members api routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
