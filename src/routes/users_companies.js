import express from "express";
import userCompanyController from "../controllers/userCompanyController.js";

const router = express.Router();

router.post(`/add`, userCompanyController);

export default router;
