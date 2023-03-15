import asyncHandler from "express-async-handler";
import Contacts from "../models/contactModel.js";

export const createContact = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const contactExist = await Contacts.findOne({
    $or: [{ email: email }, { phone: phone }],
  });
  if (contactExist) {
    res.status(400);
    throw new Error("Email or Phone number already exists");
  }
  try {
    const newContact = await Contacts.create(req.body);
    if (newContact) {
      res.status(200).json(newContact);
    } else {
      res.status(404);
      throw new Error("failed to create Contact");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

//get all contacts
export const getAllContacts = asyncHandler(async (req, res) => {
  try {
    const allContacts = await Contacts.find();
    res.status(200).json(allContacts);
  } catch (error) {
    res.status(404);
    throw new Error(error.message);
  }
});

// get Single contact
export const getSingleContact = asyncHandler(async (req, res) => {

  try {
    const contactId = req.params.id;
    console.log(contactId);
    const contact = await Contacts.findById(contactId);
    res.status(200).json(contact);
  } catch (error) {
    res.status(404);
    throw new Error(error.message);
  }
});

//update Contact
export const updateContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const id = req.params.id;
    const updateContact = await Contacts.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json(updateContact);
  } catch (error) {
    res.status(404);
    throw new Error(error.message);
  }
});

// delete Contact
export const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contactId = req.params.id;
    await Contacts.findByIdAndDelete(contactId).then((response) => {
      res.status(200).json({
        message: "contact deleted successfully",
        success: true,
      });
    });
  } catch (error) {
    res.status(404);
    throw new Error(error.message);
  }
});

export const searchContact = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await Contacts.find(keyword).find();
  res.send(users);
});
