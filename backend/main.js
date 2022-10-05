const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.Port || 3333

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta: " + PORT)
})