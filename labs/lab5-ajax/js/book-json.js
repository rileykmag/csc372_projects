function opacity(){
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
        image[i].style.opacity = "0.5";
    }
}

function request(filePath, index) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status === 200){

            var responseObject = JSON.parse(xhr.responseText);

            var newData = '';

            newData += '<h3>' + responseObject.books[index].title + '</h3>';
            newData += '<p>' + responseObject.books[index].author + '</p>';
            newData += '<p>' + responseObject.books[index].sold + '</p>';
            newData += '<p>' + responseObject.books[index].description + '</p>'; 



            document.getElementById('details').innerHTML = newData;
        }
    };

    xhr.open('GET', filePath, true);

    xhr.send(null);
}


var donImage = document.getElementById('don-quixote-img');
donImage.addEventListener('click', function() {
    request('data/book-data.json');
    opacity();
    donImage.style.opacity = "1";
});

var cityImage = document.getElementById('two-cities-img');
cityImage.addEventListener('click', function() {
    request('data/book-data.json');
    opacity();
    cityImage.style.opacity = "1";
});

var ringsImage = document.getElementById('lotr-img');
ringsImage.addEventListener('click', function() {
    request('data/book-data.json');
    opacity();
    ringsImage.style.opacity = "1";
});