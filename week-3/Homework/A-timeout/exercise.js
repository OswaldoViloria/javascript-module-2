/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)
*/


 function changeColor(){
    return document.body.style.backgroundColor = "purple"
};
setTimeout(changeColor, 5000); 


/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/


let index = 0;

function changebackgroundColor(){
    const colors = ["pink", "green", "blue", "purple", "orange","white"];
    document.body.style.backgroundColor = colors[index];
    if(index === 4) {
        index = 0
    } else {
    index++
    };
};
setInterval(changebackgroundColor, 5000);