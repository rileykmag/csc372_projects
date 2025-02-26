function opacity(){
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
        image[i].style.opacity = "0.5";
    }
}

function xmlRequest(filePath, subElements) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status === 200){
            document.getElementById('details').innerHTML = xhr.responseText;
        }
    };

    let response = xhr.responseXML;
    let books = response.getElementsByTagName("book");

    for (let i = 0; )


    xhr.open('GET', filePath, true);
}