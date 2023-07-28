const express = require('express');
const home = require("../controllers/home.controller")
const router = express.Router();

router.get("/", (req, res) => {
    res.render('home'), {
    }});

router.get("/artist-search", (req, res) => {
    res.render('artist-search'), {
    }});




module.exports = router;