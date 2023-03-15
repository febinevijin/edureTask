import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getSingleContact,
  searchContact,
  updateContact,
} from "../controller/contactController.js";
import { verifyUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/createContact").post( createContact);
router.route("/allContacts").get( getAllContacts)
router.route("/searchContact").get(searchContact);
router.route("/singleContact/:id").get( getSingleContact);
router.route("/updateContact/:id").put( updateContact);
router.route("/deleteContact/:id").delete( deleteContact);

export default router;
