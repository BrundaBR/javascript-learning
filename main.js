

console.log("Javascript console !");

// counter 
let count = Number(localStorage.getItem("count"))||0;
//get element
let classhtml = document.getElementsByClassName("counter");
// check for refresh 
const navigationType = window.performance.getEntriesByType('navigation')[0].type;

if  (navigationType=="reload"){
    console.log("Page reloaded!!");
    // increment counter
    
    count++;
    localStorage.setItem("count",count)
    console.log("updated counter"+count);
    
    classhtml[0].innerHTML =  `Counter ${count}`;

    console.log( classhtml[0].innerHTML);
    
}

 


