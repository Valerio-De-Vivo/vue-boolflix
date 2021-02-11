var app = new Vue({
	el: "#app",
	data: {
		films:'',
		query: ''
	},
	methods: {
		searchFilms(){
			axios
			.get('https://api.themoviedb.org/3/search/movie', {
				params: {
					api_key: 'fcb914f7da3b9d9ba542a62a798ebc93',
					query: this.query,
					language: 'it-IT'
				}
			})
			.then((result) => {
				this.films = result.data.results;
				console.log(this.films);
				this.query = ''
			})
			.catch((error) => alert('error'))
		}
	}
});