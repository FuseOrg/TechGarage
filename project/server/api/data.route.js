import express from "express"
import DataCtrl from "./data.controller.js"

const router = express.Router()

router.route("/").get(DataCtrl.apiGetData)

export default router