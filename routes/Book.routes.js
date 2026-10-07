import BookController from "../controller/Book.controller.js";
import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/Create", upload.array("image", 5), BookController.Create);
router.post("/getAllBooks", BookController.getAllBooks);
router.put("/Update/:id", BookController.Update);
router.delete("/Delete/:id", BookController.Delete);

export default router;