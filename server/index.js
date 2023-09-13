import cors from "cors"
import express, { request } from "express"
import { download } from "./download.js"

const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.json({ result: "download do vídeo realizado com sucesso !" })
})

app.listen(5173, () => console.log("server is running on port 5173"))
