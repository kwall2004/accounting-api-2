/**
 * Transaction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var moment = require('moment');

module.exports = {

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'transId'
    },
    date: {
      type: 'ref',
      required: true,
      columnName: 'transDate',
      columnType: 'datetime'
    },
    description: {
      type: 'string',
      columnName: 'transDescription'
    },
    amount: {
      type: 'number',
      columnName: 'transAmount'
    },
    cleared: {
      type: 'boolean'
    },
    createdAt: false,
    updatedAt: false

  },

  customToJSON: function () {

    return {
      ...this,
      date: moment(this.date).format('YYYY-MM-DDTHH:mm:ss')
    };

  }

};
