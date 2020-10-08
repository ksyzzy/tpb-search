var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 8080;

app.use(cors());

app.get('/api/movie/', (req, res) => {
    var title = req.query.title;
    
    var imdbId = require('name-to-imdb');
    try {
        var result = imdbId(title, async function(error, result, info) {
            if (result) {
                const fetch = require('node-fetch');
                const response = await fetch('https://pirateproxy.surf/api?url=/q.php?q=' + result);
                const data = await response.json();

                if (data[0].name === 'No results returned') res.send({error: "No such movie"});
                else res.send(true);
            }
            else {
                res.send({error: "No such movie"});
            }
        });
    } catch(error) {
        res.send(error);
    }
});

app.listen(port);
console.log('Server is listening at port 8080...');
