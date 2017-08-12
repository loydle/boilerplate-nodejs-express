const express = require('express')
const ejs = require('ejs')
const app = express()

app.listen(3000, (req, res) => {
    console.log('Server listening on port 3000...')
})

app.set('view engine', 'ejs')
app.use('/assets', express.static(__dirname + '/public/assets'))

app.get('/', (req, res) => {
    res.render('index')
})