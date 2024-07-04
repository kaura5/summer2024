function init () {
    const fetchButton = document.getElementById("fetch");
    fetchButton.addEventListener("click", fetchReviews);
}



function fetchReviews() {

    fetch("https://jsonplaceholder.typicode.com/comments")

        .then((res) => {
            console.log(res);
            if(!res.ok) {
                 throw new Error("something went wrong:");
            }
            return res.json();
        })

        .then((data) => {
            console.log(data);
            appendUsers(data);
        })

        .catch((err) => {
            console.log(err);
        });
}

function appendUsers(data) {
    let reviews = document.getElementById("reviews");
    let df = new DocumentFragment();
    data.forEach(function(item) {
        let name = document.createElement("li");
        let comment = document.createElement("p");
        name.textContent = item.name;
        comment.textContent = item.body;
        let listItem = document.createElement("div")
        listItem.append(name,comment);
        df.appendChild(listItem);
    });
    reviews.appendChild(df); 
}

window.addEventListener("DOMContentLoaded", init);