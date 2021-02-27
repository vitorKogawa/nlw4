import * as express from "express"
import { app } from "./app"
import "./config/env"

const server = express()
const port = process.env.PORT || 5555
server.use(app)

server.listen(port, () => console.log("Servidor rodando em: http://localhost:", port))



