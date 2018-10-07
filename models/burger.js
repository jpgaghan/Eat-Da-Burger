var orm = require(`../config/orm`)


const burger = {
    selectAll: (cb) => {
        orm.selectAll("burger", (res) => {cb(res)});
    },
    insertOne: (name, cb) => {
        orm.insertOne("burger", name, (res) => {cb(res)});
    },
    updateOne: (name, cb) => {
        orm.updateOne("burger", name, (res) => {cb(res)});
    }
  };

  module.exports = burger;