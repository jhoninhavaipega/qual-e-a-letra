module.exports = function( app ) {

  var controller = {};

  controller.all = function( req, res ) {

    console.info(req.query.q);

  };

  return controller;

};
