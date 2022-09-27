/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const allElementP = document.querySelectorAll("p")
console.log(allElementP);

const firstDiv = document.querySelector("div")
console.log(firstDiv);

const jumbotronText = document.querySelector("#jumbotron-text")
console.log(jumbotronText);

const container = document.querySelectorAll(".primary-content p")
console.log(container);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector("#alertBtn");
alertButton.onclick = () => {
    alert("Thanks for visiting Bikes for Refugees!")
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.onclick = () => {
    document.body.style.backgroundColor = "grey"
}

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const learnMore = document.querySelector("#addTextBtn")

function addParagraph(text) {
   const more = document.createElement("p") 
   const p = document.createTextNode(text)
   more.appendChild(p)
   
   document.getElementById("mainArticles").appendChild(more)
}
learnMore.addEventListener("click", addParagraph)


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const changeLarge = document.querySelector("#largerLinksBtn")
changeLarge.addEventListener("click", function() {
    const todosLosLinks = document.querySelectorAll("a")
    todosLosLinks.forEach(
        (links) => links.style.fontSize = "large"
    )
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addArticle = document.querySelector("#addArticleBtn")

addArticle.addEventListener("click", (event) => {
    event.preventDefault()
    const inputField = document.querySelector(".addArticle")
    const inputText = inputField.value
    addParagraph(inputText);
    inputField.value = ""
    
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const changeColorButtonAgain = document.querySelector('#bgrChangeBtn');

let index = 0;

const colorChange = (event) => {
    const colors = ['pink', 'green', 'blue', 'purple', 'orange'];
    event.preventDefault();
    document.body.style.backgroundColor = colors[index];
    if(index === 4) {
        index = 0;
    } else {
    index++;
    };
};

changeColorButtonAgain.addEventListener("click", colorChange);
