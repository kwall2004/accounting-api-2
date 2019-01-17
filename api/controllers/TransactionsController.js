/**
 * TransactionsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function (req, res) {

    var parseBlueprintOptions = req.options.parseBlueprintOptions || req._sails.config.blueprints.parseBlueprintOptions;

    var queryOptions = parseBlueprintOptions(req);
    var Model = req._sails.models[queryOptions.using];

    sails.log(req.body[0]);

    res.ok();
  }

};
