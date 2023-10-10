const express = require('express')
const app = express()
const port = 3000

app.get('/marineni', (req, res) => {
  res.send("Hi Marineni!")
})

app.listen(port, () => {
  console.log(`prathik app listening on port ${port}`)
})
