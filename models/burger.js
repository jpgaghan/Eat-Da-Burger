var orm = require(`../config/orm`)


const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (result) => {cb(result)});
    },
    insertOne: (name, colname, cb) => {
        orm.insertOne("burgers", name, colname, (result) => {cb(result)});
    },
    updateOne: (name, cb) => {
        orm.updateOne("burgers", id, (result) => {cb(result)});
    }
  };

  module.exports = burger;