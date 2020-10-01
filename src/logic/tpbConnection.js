export function ajaxSearch(title) {
    fetch('https://pirateproxy.surf/api?url=/q.php?q=' + title.toString(), {
        crossDomain: true,
        mode: 'cors',
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(function(err) { console.log('Fetch Error :-S', err) })
};

export function imdbSearch(title) {

};
