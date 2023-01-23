const Titre1 = document.querySelector("#Titre1");
const Titre1_0 = document.querySelector("#Titre1_0");

const Annee1 = document.querySelector("#Annee1");

const NomPre1 = document.querySelector("#NomPre1");

const Para1 = document.querySelector("#Para1");
const Article1_0 = document.querySelector("#Article1_0");
const Article1_1 = document.querySelector("#Article1_1");

const Img1 = document.getElementById("#Img1");

// console.log(Titre1);
// console.log(Titre1_0);
// console.log(Annee1);
// console.log(NomPre1);
// console.log(Para1);
// console.log(Article1_0);
// console.log(Article1_1);
// console.log(Img);


fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1")
  .then(response => response.json())
  .then(article => {

    Annee1.innerHTML = `${article.date.day} ${article.date.month} ${article.date.year}`;
    Titre1.innerHTML = article.title;
    Para1.innerHTML = article.content[0].substring(0, 137) + '..';
    Img1.setAttribute("src", article.picture);
    Article1_0.innerHTML = article.content[0];
    Article1_1.innerHTML = article.content[1];
    Titre1_0.innerHTML = `<h4>${article.title}</h4>`;
    NomPre1.innerHTML = `${article.author.name} ${article.author.surname}`;
    
  })
  .catch(err => console.log(err));








  

  const Titre2 = document.querySelector("#Titre2");
  const Titre2_0 = document.querySelector("#Titre2_0");
  
  const Annee2 = document.querySelector("#Annee2");
  
  const NomPre2 = document.querySelector("#NomPre2");
  
  const Para2 = document.querySelector("#Para2");
  const Article2_0 = document.querySelector("#Article2_0");
  const Article2_1 = document.querySelector("#Article2_1");
  
  const Img2 = document.getElementById("#Img2");
  
  
  fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1")
    .then(response => response.json())
    .then(article => {
  
      Annee2.innerHTML = `${article.date.day} ${article.date.month} ${article.date.year}`;
      Titre2.innerHTML = article.title;
      Para2.innerHTML = article.content[0].substring(0, 137) + '..';
      Img2.setAttribute("src", article.picture);
      Article2_0.innerHTML = article.content[0];
      Article2_1.innerHTML = article.content[1];
      Titre2_0.innerHTML = `<h4>${article.title}</h4>`;
      NomPre2.innerHTML = `${article.author.name} ${article.author.surname}`;
      
    })
    .catch(err => console.log(err));