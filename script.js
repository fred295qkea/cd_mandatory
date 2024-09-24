"use strict"
const cd = []

const sumbit = document.querySelector(".submit")

const author = document.querySelector("#author")
const title = document.querySelector("#title")
const year = document.querySelector("#year")



function build(review){

    document.querySelector(".reviews").innerHTML = ""

    const clone = document.querySelector(".cd_template").content.cloneNode(true);

    clone.querySelector(".author").textContent = review.author;
    clone.querySelector(".title").textContent = review.title;
    clone.querySelector(".year").textContent = review.year;

    document.querySelector(".reviews").appendChild(clone);
}


// function handleCD(){
//     cd.forEach((record) =>{
//         const recordContainer = document.createElement("tr")

//         const recordAuthor = document.createElement("tr")
//         recordAuthor.innerText = record.author
//         const recordTitle = document.createElement("tr")
//         recordTitle.innerText = record.title
//         const recordYear = document.createElement("tr")
//         recordYear.innerText = record.author

//         recordContainer.append(recordAuthor)
//         recordContainer.append(recordTitle)
//         recordContainer.append(recordYear)

//     })
// }

sumbit.addEventListener("click", function(e){
    e.preventDefault();

    const newReview = {
        author: author.value,
        title: title.value,
        year:  year.value
    }

    cd.push(newReview)

    author.value = ""
    title.value = ""
    year.value = ""

    alert("New record added")

    cd.forEach(build)
})
