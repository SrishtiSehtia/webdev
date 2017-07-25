var movies = [
	{
		title: "Frozen",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Mad Max Fury Road",
		rating: 4,
		hasWatched: false
	},
	{
		title: "In Bruges",
		rating: 3,
		hasWatched: true
	}
]

movies.forEach(function(movie) {
	console.log(buildString(movie))
})

function buildString(movie) {
	var res = "You have "
	if(movie.hasWatched) {
		res += "watched"
	} else {
		res += "not seen"
	}
	res += " \"" + movie.title + "\" - " + movie.rating + " stars"
	return res
}
