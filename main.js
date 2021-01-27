//1
let idContent = document.querySelector('#content')
console.log(idContent);

//2
let idContentAll = document.querySelectorAll('#content')
console.log(idContentAll);

//3
let classImportant = document.querySelector('.important')
console.log(classImportant);

//4
let classImportantAll = document.querySelectorAll('.important')
console.log(classImportantAll);

//5
let liAll = document.querySelectorAll('li')
let monTabLi = Array.from(liAll)

monTabLi.forEach(el => {
    let monText = el.innerText
    console.log(monText.substr(0, monText.length-1) + monText.substr(-1).toUpperCase());
});


//6
const d = document.getElementById("content"); 
const p = d.getElementsByClassName('grandParagraphe');
console.log(p); 

//6 version query
let idContent2 = document.querySelector('#content')
let paraInId = idContent2.querySelector('.grandParagraphe')
console.log(paraInId);