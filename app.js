let express = require('express');

var app=express();

app.set('view engine','ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname,'public')));
//Routes in routes/index.js
//home
app.get('/', routes.home);

//single anime
app.get('/star_wars_movies/:movie_no?',routes.movie_single);

//error 404
app.get('*',routes.notfound);


app.listen(process.env.PORT || 3000);
