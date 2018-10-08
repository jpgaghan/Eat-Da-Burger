var express = require(`express`);
var router = express.Router();
var burger = require(`../models/burger`);



router.get(`/`, (req, res) => {
    burger.selectAll((data) => {
        const burgers = {
            burger: data
        };
        res.render("index", burgers)
    })
});

router.post(`/api/burgers`, (req, res) => {
    burger.insertOne([
        req.body.name
    ], [
            `burger_name`
        ], (result) => {
            console.log(result)
            res.json({ id: result.insertId })
        })
})


router.post(`/api/burgers/:id`, (req, res) => {
    var stringValue = req.body.devoured;
    var boolValue = stringValue.toLowerCase() == 'true' ? true : false;
    burger.updateOne({
        id: parseInt(req.params.id),
    }, [
            boolValue
        ]

        ,
        (result) => {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
})

router.delete(`/api/burgers/:id`, (req, res) => {
    burger.deleteOne({
        id: parseInt(req.params.id),
    },
        (result) => {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
})

module.exports = router;