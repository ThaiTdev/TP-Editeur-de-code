const body = document.querySelector("body");
const areaHtml = document.querySelector(".area-html");
const areaCss = document.querySelector(".area-css");
let areaJs = document.querySelector(".area-js");
const progressBar = document.querySelector(".progress-bar");
const btnChecked = document.querySelector(".btn-checked");
const btnChecked2 = document.querySelector(".btn-checked2");
const btnChecked3 = document.querySelector(".btn-checked3");
let compteur = document.querySelector(".compteur");
const btnBox = document.querySelectorAll(".btn-box");
const btnBox2 = document.querySelectorAll(".btn-box2");
const btnBox3 = document.querySelectorAll(".btn-box3");
const btnBox4 = document.querySelectorAll(".btn-box4");
const btnResutl = document.querySelector(".btn-result");
const root = document.getElementById("root");
const style = document.querySelector("style");
const script = document.getElementById("script1");
const container = document.createElement("div");
const structure = document.querySelectorAll(".structure");
const select = document.querySelector(".btn-box");
const select3 = document.querySelector(".btn-box3");
const select4 = document.querySelector(".btn-box4");
const alerte = document.querySelector(".alert");
const blure = document.querySelector(".bg-blur");
const cross = document.querySelector(".cross");

let originSize = 0;
let comptMax = 0;
let orangeBar = 0;
let redBar = 0;
let sizeBar = 0;
let valeur = 0;

// console.log(areaHtml);
// console.log(areaCss);
// console.log(areaJs);
// console.log(compteur);
// console.log(comptMax);
// console.log(btnChecked);
//  console.log(btnBox);
// console.log(btnResutl);
// console.log(structure);

/********************************************progress-bar**************************/
areaHtml.addEventListener("keyup", (e) => {
  /*************ici je récupère la valeur max que j'ai entré dans mon input********/
  comptMax = document.getElementById("comptMax").value;
  /***************************pop-up d'alerte******************/
  if (comptMax <= 0) {
    alerte.style.display = "flex";
    blure.style.display = "flex";
    body.style.overflow = "hidden";
  }
  cross.addEventListener("click", () => {
    alerte.style.display = "none";
    blure.style.display = "none";
    body.style.overflow = "initial";
  });

  compteur.innerHTML = comptMax;

  /***compteur de lettre ***/

  /***********************ici je stock la valeur des entrées moins les balises******/
  let compteur1 = e.target.value.replace(/(<([^>]+)>)/gi, "").length;
  /*ici je stock la valeur des entrées moins la valeur des entrées sans les balises*/
  valeur =
    e.target.value.length - e.target.value.replace(/(<([^>]+)>)/gi, "").length;

  /**************ici j'incrémente mon compteur à chaque entrée moins les balises **/
  compteur.innerHTML = compteur1;

  /*************quantité max de lettres ***/

  /**ici je fixe la limite d'entrées dans le textaréa en fonction de ma variable comptMax - ma variable valeur*/
  areaHtml.maxLength = parseInt(comptMax) + valeur;
  /*******************calcul du pourcentage max***********/
  orangeBar = (50 / 100) * comptMax;
  redBar = (80 / 100) * comptMax;
  /****************conditions pour la progress-bar *******/
  /****ici je stock la longueur réelle de ma div  progressBar diviser par la valeur entrée dans le input */
  let barlength = 400 / comptMax;
  /************ici  je mets en place les conditions pour l'apparition et la couleur de ma progressBar */
  if (compteur1 < orangeBar && compteur1 > 0) {
    let result = compteur1 * barlength + "px";
    progressBar.style.backgroundColor = "chartreuse";
    progressBar.style.width = result;
    progressBar.style.transition = "all 0.8s";
  } else if (compteur1 >= orangeBar && compteur1 < redBar) {
    let result = compteur1 * barlength + "px";
    progressBar.style.backgroundColor = "#ff6905";
    progressBar.style.width = result;
    progressBar.style.transition = "all 0.8s";
  } else if (compteur1 >= redBar && compteur1 <= comptMax) {
    let result = compteur1 * barlength + "px";
    areaHtml.classList.remove("active");
    progressBar.style.width = result;
    progressBar.style.transition = "all 0.8s";
    progressBar.style.backgroundColor = "#fa0909";
  } else if (compteur1 < 1) {
    progressBar.style.transition = "all 0.5s";
    progressBar.style.width = 0;
  }
});

btnChecked.addEventListener("click", (e) => {
  btnBox.forEach((btn) => {
    switch (btn.value) {
      case "div":
        areaHtml.value += "<div class=''></div>";
        select.value = "tags";
        break;
      case "h1":
        areaHtml.value += "<h1 class=''></h1>";
        select.value = "tags";
        break;
      case "h2":
        areaHtml.value += "<h2 class=''></h2>";
        select.value = "tags";
        break;
      case "h3":
        areaHtml.value += "<h3 class=''></h3>";
        select.value = "tags";
        break;
      case "h4":
        areaHtml.value += "<h4 class=''></h4>";
        select.value = "tags";
        break;
      case "h5":
        areaHtml.value += "<h5 class=''></h5>";
        select.value = "tags";
        break;
      case "p":
        areaHtml.value += "<p class=''></p>";
        select.value = "tags";
        break;
      case "br":
        areaHtml.value += "<br/>";
        select.value = "tags";
        break;
      case "span":
        areaHtml.value += "<span class=''></span>";
        select.value = "tags";
        break;
      case "button":
        areaHtml.value += "<button class=''></button>";
        select.value = "tags";
        break;
      case "img":
        areaHtml.value += "<img class='' src='' alt='' />";
        select.value = "tags";
        break;
      case "input":
        areaHtml.value += "<input class='' type='' value='' />";
        select.value = "tags";
        break;
      case "select":
        areaHtml.value += "<select class='' name=''  /></select>";
        select.value = "tags";
        break;
      case "option":
        areaHtml.value += "<option class='' name='' value='' /></option>";
        select.value = "tags";
        break;
      case "label":
        areaHtml.value += "<label for='' ></label>";
        select.value = "tags";
        break;
      default:
        break;
    }
  });
});

btnChecked3.addEventListener("click", (e) => {
  console.log("toto");
  btnBox3.forEach((btn) => {
    switch (btn.value) {
      case "const":
        areaJs.value += "const";
        select3.value = "element";
        break;
      case "let":
        areaJs.value += "let";
        select3.value = "element";
        break;
      case "var":
        areaJs.value += "var";
        select3.value = "element";
        break;
      case "document":
        areaJs.value += "document.";
        select3.value = "element";
        break;
      case "getElementById":
        areaJs.value += "let variable = document.getElementById('id');";
        select3.value = "element";
        break;
      case "querySelector":
        areaJs.value += "let variable = document.querySelector('.class');";
        select3.value = "element";
        break;
      case "querySelector":
        areaJs.value += "let variable = document.querySelectorAll('.class');";
        select3.value = "element";
        break;
      case "createElement":
        areaJs.value += "let variable = document.createElement('tag')";
        select3.value = "element";
        break;
      case "addEventListener":
        areaJs.value +=
          "variable.addEventListener('écouteur d'événement',(e) => {})";
        select3.value = "element";
        break;
      case "addEventListener":
        areaJs.value +=
          "variable.addEventListener('écouteur d'événement',(e) => {})";
        select3.value = "element";
        break;

      default:
        break;
    }
  });
  btnBox4.forEach((btn1) => {
    switch (btn1.value) {
      case "loop-doWhile":
        areaJs.value += "do{} while(condition);";
        select4.value = "start";
        break;
      case "loop-while":
        areaJs.value += "while(condition){};";
        select4.value = "start";
        break;
      case "loop-for":
        areaJs.value += "for(i=?;i<?;i++){};";
        select4.value = "start";
        break;
      case "loop-forOf":
        areaJs.value += "for(variables of variable){};";
        select4.value = "start";
        break;
      case "loop-forEach":
        areaJs.value += "variables.forEach((varaible) =>{});";
        select4.value = "start";
        break;
      default:
        break;
    }
  });
});

console.log(select);
select.addEventListener("click", (e) => {
  console.log(e);
});

structure.forEach((items) => {
  items.addEventListener("click", (e) => {
    areaCss.value += items.value;
  });
});

areaHtml.addEventListener("keyup", (e) => {
  container.innerHTML = areaHtml.value;
  root.appendChild(container);
});

areaCss.addEventListener("keyup", (e) => {
  style.innerHTML = areaCss.value;
});

areaJs.addEventListener("keyup", (e) => {
  eval(areaJs.value);
});

// areaHtml.removeEventListener("keyup", (e) => {});
// areaCss.removeEventListener("keyup", (e) => {});
// areaJs.removeEventListener("keyup", (e) => {});
// btnChecked.removeEventListener("click", (e) => {});
// btnChecked2.removeEventListener("click", (e) => {});
// btnChecked3.removeEventListener("click", (e) => {});
