const express = require("express");
const {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getContactbyid,
} = require("../controller/contactController");

const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler")
router.use(validateToken)
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContactbyid).put(updateContact).delete(deleteContact);

module.exports = router;
