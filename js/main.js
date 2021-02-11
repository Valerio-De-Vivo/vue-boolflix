var app = new Vue({
	el: "#app",
	data: {
		films:'',
		serie: '',
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

					axios
					.get('https://api.themoviedb.org/3/search/tv', {
						params: {
							api_key: 'fcb914f7da3b9d9ba542a62a798ebc93',
							query: this.query,
							language: 'it-IT'
						}
					})
					.then((res) => {
						this.films = [...this.films, ...res.data.results]
					});

					
					this.query = ''
			})
			.catch((error) => alert('error'));
		},


		star(a){
			let b = (a / 2);
			let star = Math.round(b);
			return star
		}
	}
});