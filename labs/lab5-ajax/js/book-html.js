function opacity(){
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
        image[i].style.opacity = "0.5";
    }
}


function xmlRequest(filePath) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status === 200){
            document.getElementById('details').innerHTML = xhr.responseText;
        }
    };

    xhr.open('GET', filePath, true);

    xhr.send(null);
}

var donImage = document.getElementById('don-quixote-img');
donImage.addEventListener('click', function() {
    xmlRequest('data/cervantes-data.html');
    opacity();
    donImage.style.opacity = "1";
});

var cityImage = document.getElementById('two-cities-img');
cityImage.addEventListener('click', function() {
    xmlRequest('data/dickens-data.html');
    opacity();
    cityImage.style.opacity = "1";
});

var ringsImage = document.getElementById('lotr-img');
ringsImage.addEventListener('click', function() {
    xmlRequest('data/tolkien-data.html');
    opacity();
    ringsImage.style.opacity = "1";
});


