module.exports = function( app ) {

  var controller = app.controllers.search;

  app.route('/api/search')
  .get(controller.all);

};
