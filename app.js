const addBtn = document.querySelector(".eklem");
const silBtn = document.querySelector(".sil");
const ing = document.querySelector(".ing");
const tr = document.querySelector(".tr");
const eksil = document.querySelector(".eksil");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const cerceve = document.querySelector(".cerceve");
const sayı = document.querySelector(".span");

let a = 0;
let asd = 0;
let elf = 1;

let local = JSON.parse(localStorage.getItem("LOCAL")) || [];

left.addEventListener("click", () => {
  if (asd == 0) {
    left.disabled = "";
    elf = 1;
  } else {
    elf--;
    asd += 200;
    cerceve.style.transform = `translateX(${asd}px)`;
  }

  sayı.innerText = elf;
  localStorage.setItem("LOCAL", JSON.stringify(local));
});
right.addEventListener("click", () => {
  if (elf >= local.length) {
    elf = 1;
    asd = 0;
    cerceve.style.transform = `translateX(${asd}px)`;

    sayı.innerText = elf;
  } else {
    sayı.innerText = elf;

    asd -= 200;

    elf++;
    cerceve.style.transform = `translateX(${asd}px)`;

    sayı.innerText = elf;
  }
  localStorage.setItem("LOCAL", JSON.stringify(local));
});

const renderSavedTodos = () => {
  local.forEach((ana) => {
    createListElement(ana);
  });
};
renderSavedTodos();

function createListElement(newAna) {
  const { id, completed, text1, text2 } = newAna;

  const ana = document.createElement("div");
  ana.setAttribute("id", id);
  ana.classList.add("ana");

  completed && ana.classList.add("checked");

  const kapsa = document.createElement("div");
  kapsa.classList.add("kapsa");
  ana.appendChild(kapsa);
  const ilk = document.createElement("div");
  ilk.classList.add("ilk");
  kapsa.appendChild(ilk);
  const arka = document.createElement("div");
  arka.classList.add("arka");
  kapsa.appendChild(arka);
  const p1 = document.createElement("p");
  const pText1 = document.createTextNode(text1);
  p1.appendChild(pText1);
  ilk.appendChild(p1);
  const p2 = document.createElement("p");
  const pText2 = document.createTextNode(text2);
  p2.appendChild(pText2);
  arka.appendChild(p2);
  cerceve.appendChild(ana);
}

cerceve.addEventListener("click", (e) => {
  e.target.addEventListener("click", () => {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "checked"
    );
    local.map((elem, index) => {
      if (
        elem.id ==
        e.target.parentElement.parentElement.parentElement.getAttribute("id")
      ) {
        local[index].completed = !local[index].completed;
      }
    });
    localStorage.setItem("LOCAL", JSON.stringify(local));
  });
});

eksil.addEventListener("click", (e) => {
  a--;
  if (e.target.classList.contains("sil")) {
    sayı.innerText = elf;
    if (local.length == 0) {
      //   right.disabled = "";
      alert("Kart Boş");
      elf = 1;
      a = 0;
      asd = 0;
      sayı.innerText = elf;
    } else {
      const id =
        e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].children[0].getAttribute(
          "id"
        );

      e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].children[0].remove();

      local = local.filter((ana) => ana.id !== Number(id));
    }

    localStorage.setItem("LOCAL", JSON.stringify(local));
  } else if (e.target.classList.contains("eklem")) {
    a++;
    if (ing.value.trim() === "" || tr.value.trim() === "") {
      alert("Eksik Giriş.Lütfen Tekrar Deneyiniz!!!");
    } else {
      const newAna = {
        id: new Date().getTime(),
        completed: false,
        text1: ing.value,
        text2: tr.value,
      };

      createListElement(newAna);

      local.push(newAna);

      localStorage.setItem("LOCAL", JSON.stringify(local));

      ing.value = "";
      tr.value = "";
    }
  }
});
