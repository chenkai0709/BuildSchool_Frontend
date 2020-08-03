

let url = "https://maskmap.azurewebsites.net/api/mask/getmaskstock";

let btn = document.querySelector('#btn');

window.onload = function() {
    btn.addEventListener("click", fetchRequestGet);
}

function fetchRequestGet() {
    const request = new Request(url);

    fetch(request)
        .then(response => {
                response.text();
                // debugger;
            })
        .then(text => {
            console.log(text);
        })
        .catch(ex => {
            console.log(ex);
        })
}