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

    for(let i = 0; i < books.length; i++){
        let title = books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        let author = books[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
        let sold = books[i].getElementsByTagName("sold")[0].childNodes[0].nodeValue;
        let description = books[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;

        let book = document.createElement("div");
        book.innerHTML = title + " by " + author + " (" + year + ") - " + genre + " - $" + price;
        document.getElementById(subElements).appendChild(book);
    }


    xhr.open('GET', filePath, true);
}