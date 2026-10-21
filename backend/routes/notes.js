const express = require("express");
const route = express.Router();

const { handleGetAllNotes,
    handleCreateNotes,
    handleGetAllNotesById,
    handleEditAllNotes,
    handleDeletNotes
} = require("../controllers/notes");
const Auth = require("../middelware/auth");

route.get("/getnote", Auth, handleGetAllNotes);
route.post("/addnote", Auth, handleCreateNotes);
route.get("/getnote/:id", Auth, handleGetAllNotesById);
route.patch("/editnote/:id", Auth, handleEditAllNotes);
route.delete("/deletenote/:id", Auth, handleDeletNotes);



module.exports = route;