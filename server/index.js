import cors from "cors"
import express, { request } from "express"

const app = express()
app.use(cors())

app.get("/summary", (request, response) => {
  response.send("você criou um servidor !!")
})

app.get("/home", (request, response) => {
  response.send("pagina inicial !!")
})

app.listen(5173, () => console.log("server is running on port 5173"))
