exports.show = function (req, res, next) {

	req.getConnection(function(err, connection){
		if (err) return next(err);

		connection.query('SELECT artist_name,track_name,DATE_FORMAT(release_date,"%d %b %y") AS release_date FROM Latest_tracks', [], function(err, results) {
			if (err) return next(err);
			res.render( 'downloads', {
			    Latest_tracks  : results,

		   	});
	  	});
  	});
};
