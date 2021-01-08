const orm = require("orm");

const burger = {
    selectAll(cb) {
      orm.all('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
      orm.create('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
      orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
    deleteOne(condition, cb) {
      orm.delete('burgers', condition, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (Controller.js).
  module.exports = burger;