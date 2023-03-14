const localList = document.getElementById("localUl");
const nameForm = document.getElementById("nameForm"); //PRENDO GLI ELEMENTI
const delBtn = document.getElementById("delName");
const nameIn = document.getElementById("name");
const timer = document.getElementById("timer");

let lsid = 0;
if (!sessionStorage.getItem("t")) {
  sessionStorage.setItem("t", 0);
}

window.addEventListener("load", () => {
  for (i = 0; i < localStorage.length; i++) {
    let nameEl = document.createElement("li");
    nameEl.innerText = localStorage.getItem(`Name-${i}`);
    localList.appendChild(nameEl);
  }

  d = sessionStorage.getItem("t");
  t = parseInt(d);

  setInterval(() => {
    t += 1;
    sessionStorage.setItem("t", t);
    timer.innerText = sessionStorage.getItem("t");
  }, 1000);
});

// Sul submit memorizzo in local 'name': 'input value'
// Creo l'elemento li e gli assegno il valore di 'name' via .innertext
// Lo appendo alla ul e resetto il form
nameForm.addEventListener("submit", function (e) {
  localStorage.setItem(`Name-${lsid}`, nameIn.value);

  let nameEl = document.createElement("li");
  nameEl.innerText = localStorage.getItem(`Name-${lsid}`);
  localList.appendChild(nameEl);
  e.preventDefault();
  lsid += 1;
  nameIn.value = "";
});

nameForm.addEventListener("reset", () => {
  localList.innerText = "";
  localStorage.clear();
});

// rimuovo ultimo local storage ed ultimo render della lista
delBtn.addEventListener("click", function () {
  lsid -= 1;
  localStorage.removeItem(`Name-${lsid}`);
  localList.removeChild(localList.lastChild);
});
