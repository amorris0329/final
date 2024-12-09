const books = `{
    "bookList" : [
        {
            "title" : "The Divine Comedy",
            "author" : "Dante Alighieri",
            "published" : ["1321"],
            "image" : "divineComedy.png",
            "price" : 17.76,
            "qty" : 75,
            "genre" : "Epic Poetry"
        },
        {
            "title" : "Test",
            "author" : "Anderson Morris",
            "published" : ["2024", "12", "2"],
            "image" : "notAvailable.png",
            "price" : 17.76,
            "qty" : 10,
            "genre" : "Test"
        },
        {
            "title" : "The Prince",
            "author" : "Niccolo Machiavelli",
            "published" : ["1532"],
            "image" : "thePrince.png",
            "price" : 8.99,
            "qty" : 75,
            "genre" : "Philosophy"
        },
        {
            "title" : "Don Quixote: Part 1 - Recreated Edition",
            "author" : "Miguel de Cervantes",
            "published" : ["1605"],
            "image" : "donQuixoteP1.png",
            "price" : 45.99,
            "qty" : 50,
            "genre" : "Novel Fiction"
        },
        {
            "title" : "Don Quixote: Part 2 - Recreated Edition",
            "author" : "Miguel de Cervantes",
            "published" : ["1615"],
            "image" : "donQuixoteP2.png",
            "price" : 35.99,
            "qty" : 50,
            "genre" : "Novel Fiction"
        },
        {
            "title" : "The Complete Works of William Shakespeare",
            "author" : "Willaim Shakespeare",
            "published" : ["Between 1590 & 1612"],
            "image" : "completeShakespeare.png",
            "price" : 40.99,
            "qty" : 50,
            "genre" : "Miscellaneous"
        },
        {
            "title" : "The Discarded Image",
            "author" : "C. S. Lewis",
            "published" : ["1964"],
            "image" : "discardedImage.png",
            "price" : 29.99,
            "qty" : 45,
            "genre" : "Philosophy"
        }
    ]
}`;


var bookList = JSON.parse(books);
let content = document.getElementById("content");

function search() {



    const searchTerm = document.querySelector("input").value;
    const category = document.querySelector("select").value;

    clear();

    for(let i = 0; i < bookList.bookList.length; i++) {
        
        let thisOne = bookList.bookList[i];
        
        if(category == "title" && thisOne.title.includes(searchTerm)) {
            

            let pubDate = "";
            if(thisOne.published.length == 1) {
                pubDate = thisOne.published[0];
            }
            else {
                pubDate = thisOne.published[1] + "/" + thisOne.published[2] + "/" + thisOne.published[0]
            }

            let info = `
                <p class="giveBorder pb-3"> 
                    <img src=${thisOne.image} alt="Book cover of ${thisOne.title}." class="img-fluid">
                    <br>
                    <br>
                    <strong>Title -</strong> ${thisOne.title}
                    <br>
                    <strong>By -</strong>  ${thisOne.author}
                    <br>
                    <strong>Genre -</strong> ${thisOne.genre}
                    <br><br>
                    <strong>Published -</strong> ${pubDate}
                    <br>
                    <strong>Price -</strong> $ ${thisOne.price}
                    <br>
                    <strong>Quantity in Stock -</strong> ${thisOne.qty}
                </p> 
            `;

            
        
            let newText = document.createElement("div");
            newText.innerHTML = info;
            content.appendChild(newText);
        }
        else if(category == "author" && thisOne.author.includes(searchTerm)) {
            

            let pubDate = "";
            if(thisOne.published.length == 1) {
                pubDate = thisOne.published[0];
            }
            else {
                pubDate = thisOne.published[1] + "/" + thisOne.published[2] + "/" + thisOne.published[0]
            }

            let info = `
                <p class="giveBorder pb-3"> 
                    <img src=${thisOne.image} alt="Book cover of ${thisOne.title}." class="img-fluid">
                    <br>
                    <br>
                    <strong>Title -</strong> ${thisOne.title}
                    <br>
                    <strong>By -</strong>  ${thisOne.author}
                    <br>
                    <strong>Genre -</strong> ${thisOne.genre}
                    <br><br>
                    <strong>Published -</strong> ${pubDate}
                    <br>
                    <strong>Price -</strong> $ ${thisOne.price}
                    <br>
                    <strong>Quantity in Stock -</strong> ${thisOne.qty}
                </p> 
            `;
        
            let newText = document.createElement("div");
            newText.innerHTML = info;
            content.appendChild(newText);
        }
        else if(category == "maxPrice" && thisOne.price < searchTerm) {
            
            let pubDate = "";
            if(thisOne.published.length == 1) {
                pubDate = thisOne.published[0];
            }
            else {
                pubDate = thisOne.published[1] + "/" + thisOne.published[2] + "/" + thisOne.published[0]
            }

            let info = `
                <p class="giveBorder pb-3"> 
                    <img src=${thisOne.image} alt="Book cover of ${thisOne.title}." class="img-fluid">
                    <br>
                    <br>
                    <strong>Title -</strong> ${thisOne.title}
                    <br>
                    <strong>By -</strong>  ${thisOne.author}
                    <br>
                    <strong>Genre -</strong> ${thisOne.genre}
                    <br><br>
                    <strong>Published -</strong> ${pubDate}
                    <br>
                    <strong>Price -</strong> $ ${thisOne.price}
                    <br>
                    <strong>Quantity in Stock -</strong> ${thisOne.qty}
                </p> 
            `;
        
            let newText = document.createElement("div");
            newText.innerHTML = info;
            content.appendChild(newText);
        }
        else if(category == "genre" && thisOne.genre.includes(searchTerm)) {
            
            let pubDate = "";
            if(thisOne.published.length == 1) {
                pubDate = thisOne.published[0];
            }
            else {
                pubDate = thisOne.published[1] + "/" + thisOne.published[2] + "/" + thisOne.published[0]
            }

            let info = `
                <p class="giveBorder pb-3"> 
                    <img src=${thisOne.image} alt="Book cover of ${thisOne.title}." class="img-fluid">
                    <br>
                    <br>
                    <strong>Title -</strong> ${thisOne.title}
                    <br>
                    <strong>By -</strong>  ${thisOne.author}
                    <br>
                    <strong>Genre -</strong> ${thisOne.genre}
                    <br><br>
                    <strong>Published -</strong> ${pubDate}
                    <br>
                    <strong>Price -</strong> $ ${thisOne.price}
                    <br>
                    <strong>Quantity in Stock -</strong> ${thisOne.qty}
                </p> 
            `;
        
            let newText = document.createElement("div");
            newText.innerHTML = info;
            content.appendChild(newText);
        }
    }
}


function clear() {
    
    content.innerHTML = `

    `;

}

