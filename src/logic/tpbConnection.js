export async function ajaxSearch(title) {
    try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxyurl + 'https://pirateproxy.surf/api?url=/q.php?q=' + title.toString());
        const data = await response.json();
        if (data[0].name === "No results returned") return false;
            else return true;
    } catch (error) {
        console.log(error);
    }
};


export async function imdbSearch(title) {
    let imdbId = require('imdb-id');
    let result = await imdbId(title, function(err, imdb_id) {
      if (!err) {
          console.log(imdb_id);
          return imdb_id;
      }
    });
    return result;
};
