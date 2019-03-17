/**
 * Setting.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'account'
    },
    amount: {
      type: 'number',
      columnName: 'decimalValue'
    },
    createdAt: false,
    updatedAt: false

  },

};
