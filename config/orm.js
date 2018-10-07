// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: (table, cb) => {
        connection.query(
            `SELECT * FROM ??`,
            [table],
            (err, res) => {
                (err) => { throw err }
                cb(res);
            }
        )
    },
    insertOne: (table, name, colname, cb) => {
        connection.query(
            "INSERT INTO ?? (??) VALUES (?)",
            [table, colname, name],
            (err, result) => {
                (err) => { throw err };
                cb(result);
            }
        );
    },
    updateOne: (table, id, cb) => {
        connection.query(`UPDATE ?? SET devoured = TRUE WHERE id = ?`,
            [table, id],
            (err, res) => {
                (err) => { throw err }
                cb(res);
            }
        )
    }
}

module.exports = orm;
