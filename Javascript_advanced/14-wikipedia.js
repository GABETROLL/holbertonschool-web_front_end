function createElement() {
    const p = document.createElement('p');

    p.innerText = this.responseText;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const stackoverflowRequest = new XMLHttpRequest();
    stackoverflowRequest.addEventListener('load', callback);
    stackoverflowRequest.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    stackoverflowRequest.send();
}

queryWikipedia(createElement);
