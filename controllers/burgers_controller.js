var express = require(`Express`);
var burgers = require(`../models/burger`);

var router = express.Router();

router.get(`/`, (req,res) => {
    burger.selectAll((data) => {
        const burgers = {
            burger: data
        };
        res.render("index", burgers)
    })
});

router.post(`/api/burgers`, (req,res) => {
    burger.insertOne(req.body.name, (result) {
        console.log(result)// res.json({id: result.})
    })
})

module.exports = router;