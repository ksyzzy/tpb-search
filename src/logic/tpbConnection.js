export function ajaxSearch(title) {
    fetch('https://pirateproxy.surf/api?url=/q.php?q=' + title.toString())
        .then(response => response.json())
        .then(data => console.log(data));

};


export function imdbSearch(title) {

};
