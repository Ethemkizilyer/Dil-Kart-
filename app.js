const left = document.querySelector(".left");
const right = document.querySelector(".right");
const cerceve = document.querySelector(".cerceve");
const sayı = document.querySelector(".span");
let a = 0;
let asd = 0;
let elf = 1;
// console.log(asd);
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
});
right.addEventListener("click", () => {
  // if (cerceve.children.length == 0) {
  //   alert("Kart Boş");
  //   elf = 1;
  //   sayı.innerText = elf;
  //   right.disabled = "";
  // }
  if (asd == (a - 1) * -200) {
    elf = 1;
    asd = 0;
    cerceve.style.transform = `translateX(${asd}px)`;
    //  right.disabled = "";
    console.log("burada");
    sayı.innerText = elf;
    console.log(a);
  } else {
    if(cerceve.children.length == 0){
      asd = 0
      alert("Kart Boş");
      elf = 1
      sayı.innerText = elf;
      a= 0;
      console.log(asd);
      console.log(a);
      console.log(elf);
      
    }
    else{
    asd -= 200;
    // asd = a * -200;
    elf++;
    cerceve.style.transform = `translateX(${asd}px)`;
    console.log(asd);
    console.log(a);
    sayı.innerText = elf;}
    
  }
});
right.addEventListener("dblclick", () => {
  // if (cerceve.children.length == 0) {
  //   alert("Kart Boş");
  //   elf = 1;
  //   sayı.innerText = elf;
  //   right.disabled = "";
  // }
  if (asd == (a - 1) * -200) {
    elf = 1;
    asd = 0;
    cerceve.style.transform = `translateX(${asd}px)`;
    //  right.disabled = "";
    console.log("burada");
    sayı.innerText = elf;
    console.log(a);
  } else {
    if(cerceve.children.length == 0){
      asd = 0
      alert("Kart Boş")
      elf = 1
      sayı.innerText = elf;
      a= 0
    }
    else{
    asd -= 200;
    // asd = a * -200;
    elf++;
    cerceve.style.transform = `translateX(${asd}px)`;
    console.log(asd);
    console.log(a);
    sayı.innerText = elf;}
    
  }
});

const ing = document.querySelector(".ing");
const tr = document.querySelector(".tr");
const eklem = document.querySelector(".eklem");
const sil = document.querySelector(".sil");

eklem.addEventListener("click", () => {
  if (!tr.value || !ing.value) {
    alert("Eksik Giriş");
  } else {
    a += 1;
    console.log(a);
    console.log(asd);
    const ana = document.createElement("div");
    ana.classList.add("ana");
    const kapsa = document.createElement("div");
    kapsa.classList.add("kapsa");
    const ilk = document.createElement("div");
    ilk.classList.add("ilk");
    const arka = document.createElement("div");
    arka.classList.add("arka");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    ilk.appendChild(p1);
    arka.appendChild(p2);
    kapsa.appendChild(arka);
    kapsa.appendChild(ilk);
    ana.appendChild(kapsa);
    cerceve.appendChild(ana);
    // console.log(ana);
    // console.log("merhaba");

    function ethem(item) {
      const mySentence = item;
      const words = mySentence.split(" ");

      let capit = words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
      return capit;
    }

    p1.innerText = ethem(ing.value);
    // console.log(ing.value);
    p2.innerText = ethem(tr.value);
    // console.log(tr.value);
  }
  tr.value = "";
  ing.value = "";
});

sil.addEventListener("click", (e) => {
  // elf--;
  // a--;
  console.log("gör");

  sayı.innerText = elf;
  if (cerceve.children.length == 0) {
    right.disabled = "";
    alert("Kart Boş");
    elf = 1;
    a = 0;
    asd = 0
    sayı.innerText = elf;
    
  } else {
    cerceve.children[0].remove();
  }

  // console.log(cerceve.children.length);
});

function myFunction(event) {
  event.target.addEventListener("click", () => {
    // console.log(event.target.className);
    // if(event.target.className == "v"){
    // event.target.classList.toggle("cizik");
    // console.log(event.target.firstChild);}
    // console.log(event.target.children[0].children);
    var x = event.target;
    event.target.addEventListener("dblclick", () => {
      var x = event.target;
      // console.log(x);
      // a--;
      // a--;
      if (x.parentElement.className == "kapsa") {
        event.target.parentElement.parentElement.remove();
        
        console.log("gör");

        sayı.innerText = elf;
      }
    });
    if (x.tagName == "P") {
      event.target.classList.toggle("cizik");
      event.target.parentElement.nextElementSibling.children[0].classList.toggle(
        "cizik"
      );
      //   event.target.previousElementSibling.children.classList.toggle("cizik");
      //   event.target.nextElementSibling.children[0].classList.toggle("cizik");
    }
  });
}

// ******************************LOCAL??**********************

// function saveLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   todos.forEach((todo) => {
//     // CREATE TODO DİV

//     a += 1;
//     const ana = document.createElement("div");
//     ana.classList.add("ana");
//     const kapsa = document.createElement("div");
//     kapsa.classList.add("kapsa");
//     const ilk = document.createElement("div");
//     ilk.classList.add("ilk");
//     const arka = document.createElement("div");
//     arka.classList.add("arka");
//     const p1 = document.createElement("p");
//     const p2 = document.createElement("p");
//     ilk.appendChild(p1);
//     arka.appendChild(p2);
//     kapsa.appendChild(arka);
//     kapsa.appendChild(ilk);
//     ana.appendChild(kapsa);
//     cerceve.appendChild(ana);
//     console.log(ana);
//     console.log("merhaba");

//  function ethem(item) {
//       const mySentence = item;
//       const words = mySentence.split(" ");

//       let capit = words
//         .map((word) => {
//           return word[0].toUpperCase() + word.substring(1);
//         })
//         .join(" ");
//       return capit;
//     }

//     p1.innerText = ethem(ing.value);
//     // console.log(ing.value);
//     p2.innerText = ethem(tr.value);
//     // console.log(tr.value);
//   })
//   tr.value = "";
//   ing.value = "";
// }
// function removeLocaleStorage(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = {};
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   const todoIndex = todo.children[1].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
