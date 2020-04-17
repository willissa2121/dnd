import dotenv from "dotenv"
dotenv.config()
const config =  {
  local:  "http://localhost:3001",
  prod: "https://dnd-server-api.herokuapp.com"
}

export default config