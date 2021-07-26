const express = require('express')
const app = express()

const port = 3000

app.listen(port, () => `listening on port ${port}`)

app.get('/', (req, res) => res.send('your project is running!!'))
