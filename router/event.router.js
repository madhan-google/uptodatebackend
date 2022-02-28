import express from "express";
const router = express.Router();
import { createEvent } from "../controllers/createevent.controller.js";
import { getEvent } from "../controllers/getevent.controller.js";
router.post("/createevent", createEvent);
router.get("/getevent", getEvent);
export default router;
