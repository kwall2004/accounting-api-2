/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  createEach: function (req, res) {

    var Model = req._sails.models['transaction'];

    Model.createEach(req.body).exec(function created(err, something) {

      if (err) {
        return res.serverError(err);
      }

      res.ok();

    });

  }

};
