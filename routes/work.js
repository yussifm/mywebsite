const route = require("express").Router();

// get working
route.get("/work", function (req, res, next) {
    res.render('work', { title: "Work" })
});


module.exports = route;