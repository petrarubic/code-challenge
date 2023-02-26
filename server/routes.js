const auth = require("../middleware/authorization");
const encoder = require("./encoder");
const express = require("express");

const router = express.Router();
router.use(express.json());
module.exports = router;

router.post("/encode", auth, async (req, res) => {
  try {
    res.status(201).json(encoder(req.body.text));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
