
console.dir(document.querySelector("div a"));

// console ans:  a.boxLink

console.dir( document.querySelectorAll("div a"));

//NodeList(4)


document.getElementsByClassName("images");

// let smallPicture = document.getElementsByClassName("oldImg");

// for( let i=0;i<smallPicture.length;i++){
//     console.dir(smallPicture[i]);
// }
//----------------------------

let links =document.querySelectorAll(".box a");

for( link of links){
    link.style.color="purple"; 
}