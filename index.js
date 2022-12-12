const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./src/utils/db')
const instrumentsRouter = require('./src/routes/instruments.route')
const sellersRouter = require('./src/routes/sellers.route')
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('api_floricultura is running')
})


app.use('/api/v1/instruments', instrumentsRouter)

app.use('/api/v1/sellers', sellersRouter)

app.use((error, req, res, next) => {
    console.log('ERRO', error) 
    res.status(500).json({errorMessage: error.message})
 })

app.listen(port, () => {
    console.log(`api_instrumentos running on port ${port}`)
})