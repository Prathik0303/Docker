const express = require('express')
const app = express()
const port = 3000

app.get('/prathik', (req, res) => {
  res.send("This is prathik's World!")
})

app.listen(port, () => {
  console.log(`prathik app listening on port ${port}`)
})
