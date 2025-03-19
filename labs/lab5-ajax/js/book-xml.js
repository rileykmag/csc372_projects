function opacity(){
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
        image[i].style.opacity = "0.5";
    }
}

function getNodeValue(obj,tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

function xmlRequest(filePath,index) {
    let xhr = new XMLHttpRequest();

    let div = document.getElementById('details');
    div.innerHTML = '';

    xhr.onload = function(){
        if(xhr.status === 200){
            // div.innerHTML = xhr.responseText;
            let response = xhr.responseXML;
            console.log(response);
            let books = response.getElementsByTagName("book");
            console.log(books);

            var title, author, sold, description;

            title = document.createElement("h3");
            title.appendChild(document.createTextNode(getNodeValue(books[index], "title")));
            div.appendChild(title);
            author = document.createElement("p");
            author.appendChild(document.createTextNode(getNodeValue(books[index], "author")));
            div.appendChild(author);
            sold = document.createElement("p");
            sold.appendChild(document.createTextNode(getNodeValue(books[index], "sold")));
            div.appendChild(sold);
            description = document.createElement("p");
            description.appendChild(document.createTextNode(getNodeValue(books[index], "description")));
            div.appendChild(description);

            }

    };


    xhr.open('GET', filePath, true);

    xhr.send(null);
}

var donImage = document.getElementById('don-quixote-img');
donImage.addEventListener('click', function() {
    xmlRequest('./data/book-data.xml');
    opacity();
    donImage.style.opacity = "1";
});

var cityImage = document.getElementById('two-cities-img');
cityImage.addEventListener('click', function() {
    xmlRequest('./data/book-data.xml');
    opacity();
    cityImage.style.opacity = "1";
});

var ringsImage = document.getElementById('lotr-img');
ringsImage.addEventListener('click', function() {
    xmlRequest('./data/book-data.xml');
    opacity();
    ringsImage.style.opacity = "1";
});