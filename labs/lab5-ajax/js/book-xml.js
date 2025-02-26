function opacity(){
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
        image[i].style.opacity = "0.5";
    }
}

function getNodeValue(obj,tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

function xmlRequest(filePath, subElements) {
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

            for(let i = 0; i < books.length; i++){
                var title, author, sold, description;

                title = document.createElement("h3");
                title.appendChild(document.createTextNode(getNodeValue(books[i], "title")));
                div.appendChild(title);

                author = document.createElement("p");
                author.appendChild(document.createTextNode(getNodeValue(books[i], "author")));
                div.appendChild(author);

                sold = document.createElement("p");
                sold.appendChild(document.createTextNode(getNodeValue(books[i], "sold")));
                div.appendChild(sold);

                description = document.createElement("p");
                description.appendChild(document.createTextNode(getNodeValue(books[i], "description")));
                div.appendChild(description);

            }

        }
    };


    xhr.open('GET', filePath, true);

    xhr.send(null);
}

var donImage = document.getElementById('don-quixote-img');
donImage.addEventListener('click', function() {
    xmlRequest('data/book-data.xml');
    opacity();
    donImage.style.opacity = "1";
});

var cityImage = document.getElementById('two-cities-img');
cityImage.addEventListener('click', function() {
    xmlRequest('data/book-data.xml');
    opacity();
    cityImage.style.opacity = "1";
});

var ringsImage = document.getElementById('lotr-img');
ringsImage.addEventListener('click', function() {
    xmlRequest('data/book-data.xml');
    opacity();
    ringsImage.style.opacity = "1";
});