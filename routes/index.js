var moviesJSON = require('../movies.json'); //at parent node

//home
exports.home=function(req,res){

 var movies = moviesJSON.movies;

 res.render('home',{
   title:'My Anime List Website',
   movies: movies
 });
};

exports.movie_single=function(req,res){
  var movie_number = req.params.movie_no;
  var movies = moviesJSON.movies;

  if(movie_number >=1 && movie_number <=6)
  {
  var movie = movies[movie_number - 1];
  var title = movie.title;
  var main_characters = movie.main_characters;
  res.render('movie_singles',{
    movies:movies,
    title : title,
    movie:movie,
    main_characters : main_characters
  });
}
else {
  res.render('notFound',{
    movies:movies,
    title:'ERROR:404 No such episode exists'
  });
}
};

exports.notfound = function(req,res){
var movies = moviesJSON.movies;
  res.render('notFound',{
    movies:movies,
    title:'ERROR:404 This page does not exist'
  });
};
