import express from "express";
import userCompanyController from "../controllers/userCompanyController.js";

const router = express.Router();

//add company via post
router.post(`/add`, userCompanyController);

export default router;
