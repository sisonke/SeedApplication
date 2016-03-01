exports.show = function (req, res, next) {

	req.getConnection(function(err, connection){
		if (err) return next(err);

		connection.query('SELECT * FROM Latest_tracks', [], function(err, results) {
			if (err) return next(err);
             
			res.render( 'contact us', {
			    La : results,

			});

		});
	});		

};


