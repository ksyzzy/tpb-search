export function ajaxSearch(title) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "getData.php", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = () => {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200)
            console.log(JSON.parse(this.responseText));
    };
    xhttp.send("title=" + title.toString());
};


export function imdbSearch(title) {

};
