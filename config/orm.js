// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: (table, cb) => {
        connection.query(
            `SELECT * FROM ??`,
            [table],
            (err, result) => {
                (err) => { throw err }
                cb(result);
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
    updateOne: (table, id, state, cb) => {
        connection.query(`UPDATE ?? SET devoured = ? WHERE ?`,
            [table, state, id],
            (err, result) => {
                (err) => { throw err }
                cb(result);
            }
        )
    },
    deleteOne: (table, id, cb) => {
        connection.query(`DELETE FROM ?? WHERE ?`,
            [table, id],
            (err, result) => {
                (err) => { throw err }
                cb(result);
            }
        )
    }
}

module.exports = orm;
