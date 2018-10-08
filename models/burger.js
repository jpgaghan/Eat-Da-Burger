var orm = require(`../config/orm`)

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (result) => {cb(result)});
    },
    insertOne: (name, colname, cb) => {
        orm.insertOne("burgers", name, colname, (result) => {cb(result)});
    },
    updateOne: (id, state, cb) => {
        orm.updateOne("burgers", id, state, (result) => {cb(result)});
    },
    deleteOne: (id, cb) => {
        orm.deleteOne("burgers", id, (result) => {cb(result)})
    }
  };

  module.exports = burger;