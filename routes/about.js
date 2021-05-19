const router  = require("express").Router();

// Getting About package
router.get("/about", function (req, res, next) {
    res.render('about', { title: "About" })
});

module.exports = router;