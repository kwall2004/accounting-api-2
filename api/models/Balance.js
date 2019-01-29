/**
 * Balance.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var moment = require('moment');

module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: true
    },
    date: {
      type: 'ref',
      required: true,
      columnName: 'balanceDate',
      columnType: 'datetime'
    },
    amount: {
      type: 'number',
      columnName: 'balanceAmount'
    },
    createdAt: false,
    updatedAt: false

  },

  customToJSON: function () {

    return {
      ...this,
      date: moment(this.date).format('YYYY-MM-DD')
    };

  }

};
