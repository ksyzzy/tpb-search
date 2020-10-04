export async function ajaxSearch(title) {
    try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxyurl + 'https://pirateproxy.surf/api?url=/q.php?q=' + title.toString());
        const data = await response.json();
        if (data[0].name === "No results returned") return false;
            else return true;
    } catch (error) {
        alert(error);
    }
};

function imdbHelper(title) {
    let imdbId = require('imdb-id');
    return new Promise(async (resolve, reject) => {
        try {
            let result = await imdbId(title);
            resolve(result);
        } catch(error) {
            reject(error);
        }
    });
}

export async function imdbSearch(title) {
        let imdbId = require('imdb-id');
        let result = await imdbHelper(title);
        return result;
};
