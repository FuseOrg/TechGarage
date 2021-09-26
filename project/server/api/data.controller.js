import DataDAO from "../dao/dataDAO.js"

export default class DataController {
  static async apiGetData(req, res, next) {
    const dataPerPage = req.query.dataPerPage ? parseInt(req.query.dataPerPage, 10) : 50
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}

    const { dataList, totalNumData } = await DataDAO.getData({
      filters,
      page,
      dataPerPage,
    })

    let response = {
      data: dataList,
      page: page,
      filters: filters,
      entries_per_page: dataPerPage,
      total_results: totalNumData,
    }
    res.json(response)
  }
}