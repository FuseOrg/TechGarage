import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import DataDAO from "./dao/dataDAO.js"
//import ReviewsDAO from "./dao/reviewsDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const hostname = '127.0.0.1';
const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.DATAVIEWS_DB_URI,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser : true }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await DataDAO.injectDB(client)
    //await ReviewsDAO.injectDB(client)
    app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`)
    })
  })