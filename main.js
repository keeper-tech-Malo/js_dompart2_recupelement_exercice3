let content = document.querySelector('#content');
console.log(content);

let contentAll = document.querySelectorAll('#content');
console.log(contentAll);

let liste = document.querySelector('#listElements');
let listeAll = liste.querySelectorAll('li');
let listeFinal = Array.from(listeAll) 
console.log(listeFinal);
listeFinal.forEach(el =>{
    console.log(el);
});



