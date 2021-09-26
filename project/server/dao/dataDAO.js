import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let data

export default class DataDAO {
  static async injectDB(conn) {
    if (data) {
      return
    }
    try {
        data = await conn.db(process.env.DATAVIEWS_NS).collection("data")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in DataDAO: ${e}`,
      )
    }
  }

  static async getData({
    filters = null,
    page = 0,
    dataPerPage = 50,
  } = {}) {
    let query
    if (filters) {}

    let cursor
    
    try {
      cursor = await data
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { dataList: [], totalNumData: 0 }
    }

    const displayCursor = cursor.limit(dataPerPage).skip(dataPerPage * page)

    try {
      const dataList = await displayCursor.toArray()
      const totalNumData = await data.countDocuments(query)

      return { dataList, totalNumData }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { dataList: [], totalNumData: 0 }
    }
  }
}