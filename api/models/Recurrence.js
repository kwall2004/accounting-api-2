/**
 * Recurrence.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var moment = require('moment');

module.exports = {

  tableName: 'recurrencenew',
  attributes: {

    id: {
      type: 'number',
      required: true,
      columnName: 'recurrenceId'
    },
    description: {
      type: 'string',
      columnName: 'recurrenceDescription'
    },
    category: {
      type: 'string',
      columnName: 'recurrenceCategory'
    },
    amount: {
      type: 'number',
      columnName: 'recurrenceAmount'
    },
    weeklyFrequency: {
      type: 'number',
      allowNull: true
    },
    weeklyDay: {
      type: 'string',
      allowNull: true
    },
    monthlyFrequency: {
      type: 'number',
      allowNull: true
    },
    monthlyDate: {
      type: 'number',
      allowNull: true
    },
    startDate: {
      type: 'ref',
      required: true,
      columnType: 'datetime'
    },
    endDate: {
      type: 'ref',
      columnType: 'datetime'
    },
    createdAt: false,
    updatedAt: false

  },

  customToJSON: function () {

    return {
      ...this,
      startDate: moment(this.startDate).format('YYYY-MM-DDTHH:mm:ss'),
      endDate: this.endDate && moment(this.endDate).format('YYYY-MM-DDTHH:mm:ss')
    };

  }

};
