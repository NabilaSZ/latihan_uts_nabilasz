var express = require('express');
var router = express.Router();

const mhsController = require('../controllers/mahasiswa');
router.get("/", pgnController.index); //list pengguna
router.post("/insert", pgnController.insert); //insert pengguna

module.exports = router;