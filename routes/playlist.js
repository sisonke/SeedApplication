exports.show = function (req, res, next) {

	req.getConnection(function(err, connection){
		if (err) return next(err);

		connection.query('SELECT artist_name,song_name FROM Play_list', [], function(err, results) {
			console.log(results)
			if (err) return next(err);
             
			res.render( 'playList', {
			    results  : results
			});

		});
	});		

};