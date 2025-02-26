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
        book.innerHTML = "<h3>" + title + "</h3>" + "<p><strong>" + "Author: </strong>" Charles Dickens</p>
<p><strong>Copies Sold: </strong>200 million</p>
    }


    xhr.open('GET', filePath, true);
}

/*
<h3>A Tale of Two Cities</h3>
<p><strong>Author: </strong>Charles Dickens</p>
<p><strong>Copies Sold: </strong>200 million</p>
<p>
    The novel tells the story of the French Doctor Manette, 
    his 18-year-long imprisonment in the Bastille in Paris, 
    and his release to live in London with his daughter Lucie 
    whom he had never met. The story is set against the conditions 
    that led up to the French Revolution and the Reign of Terror.
</p>
*/