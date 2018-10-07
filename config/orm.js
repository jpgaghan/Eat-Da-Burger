// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: (table, cb)=>{
        let query = connection.query(
            `SELECT * FROM ${table}`,
            (err, res) => {
                (err) => {throw err}
                cb(res);
            }
        )
    },
    insertOne: (table, name, cb)=>{
        let query = connection.query(
            `INSERT INTO ${table} SET ?`,
            {
                name: name
            },
            (err, res) => {
                (err) => {throw err}
                cb(res);
            }
        )
    },
    updateOne: (table, name, cb)=>{
        let query = connection.query(
            `UPDATE ${table} SET  WHERE ?`,
            [
                {
                    devoured: true
                },
                {
                    name: name
                }
            ],
            (err, res) => {
                (err) => {throw err}
                cb(res);
            }
        )
    }
    }

module.exports = orm;
