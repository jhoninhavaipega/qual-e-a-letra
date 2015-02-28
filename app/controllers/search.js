var request = require('request'),
    urlencode = require('urlencode');

module.exports = function( app ) {

  var controller = {};

  controller.all = function( req, res ) {

    var key = 'c319408908cd3fa96fb77623d0b79340',
        urlApi = 'http://api.musixmatch.com/ws/1.1/',
        urlSearchTrack = urlApi + 'track.search?apikey=' + key + '&q_track=' + urlencode(req.query.q),
        urlSearchArtist = urlApi + 'artist.search?apikey=' + key + '&q_artist=' + urlencode(req.query.q);

    request(urlSearchTrack, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    });

    // request(urlSearchArtist, function (error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     res.json(JSON.parse(body));
    //   }
    // });

  };

  return controller;

};
