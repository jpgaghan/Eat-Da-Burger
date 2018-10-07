var express = require(`Express`);
var router = express.Router();
var burger = require(`../models/burger`);



router.get(`/`, (req,res) => {
    burger.selectAll((data) => {
        const burgers = {
            burger: data
        };
        console.log(burgers)
        res.render("index", burgers)
    })
});

router.post(`/api/burgers`, (req,res) => {
    burger.insertOne([
        req.body.name
    ], [
        "burger_name"
    ], (result) => {
        res.json({id: result.insertId})
    })
})

module.exports = router;