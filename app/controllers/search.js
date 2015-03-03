var request = require('request'),
    urlencode = require('urlencode');

module.exports = function( app ) {

  var controller = {},
      key = 'c319408908cd3fa96fb77623d0b79340',
      urlApi = 'http://api.musixmatch.com/ws/1.1/';

  controller.all = function( req, res ) {

    var i = 0,
        arrResponse = [],
        urls = [
                  urlApi + 'track.search?apikey=' + key + '&q_track=' + urlencode(req.query.q),
                  urlApi + 'artist.search?apikey=' + key + '&q_artist=' + urlencode(req.query.q)
                ];

    urls.forEach(function( url, index ) {

      request(url, function (error, response, body) {
        i++;

        if (!error && response.statusCode == 200) {
          arrResponse.push(JSON.parse(body));
        }

        if ( i == urls.length ) {
          console.log('foi');
          res.json(arrResponse);
        }
      });

    });

  };

  return controller;

};
