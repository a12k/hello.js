(function(hello) {

	hello.init({
		
		strava: {
			name: 'Strava',
			
			// SEE https://strava.github.io/api/v3/oauth/
			oauth: {
				version: 2,
				auth: 'https://www.strava.com/oauth/authorize',
				grant: 'https://www.strava.com/oauth/token'
			},
			
			// Authorization scopes
			scope: {
				'',
				'view_private',
				'write'
			},
		}
	});
	
})(hello);
