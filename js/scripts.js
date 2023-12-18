const breatheList = document.querySelector(".breathe_list");
const output = document.querySelector(".breathe_text");
// const foundersHeader = document.querySelector(".founders_header");
const foundersInfo = document.querySelector(".founders_info");
const foundersTitle = document.querySelector(".founders_title");
const foundersText = document.querySelector(".founders_text");
const foundersFoto = document.querySelector(".founders_foto");

const pediatricians = document.querySelector("#pediatricians");
const medsisters = document.querySelector("#medsisters");
const consultants = document.querySelector("#consultants");
const ibclc = document.querySelector("#IBCLC");

const buttonLeft = document.querySelector(".founders_left");
const buttonRight = document.querySelector(".founders_right");
const image = document.querySelector(".image");

const actionsLeft = document.querySelector(".actions_left");
const actionsRight = document.querySelector(".actions_right");
const actionsImage = document.querySelector(".actions_image");

const documentsLeft = document.querySelector(".documents_left");
const documentsRight = document.querySelector(".documents_right");
const documentsImage = document.querySelector(".documents_image");

const trainingLeft = document.querySelector(".training_left");
const trainingRight = document.querySelector(".training_right");
const trainingImage = document.querySelector(".training_image");
const training1Image = document.querySelector(".training1_image");

const foundersItems = {
  titles: [
    "Барська Ліна Президент",
    "Кірсанова Тетяна Віцепрезидент ",
    "Боброва Ксенія Член Правління",
  ],
  texts: [
    "Президент УАМГВ,  педіатр, IBCLC Харків, Україна 'Перший ГВфрендлі'",
    "Педіатр,  дитячий інфекціоніст,  консультант з грудного вигодовування Харків,  Україна 'Перший ГВфрендлі'",
    "Лікар загальної практики сімейної медицини консультант з грудного вигодовування Харків, Україна 'Перший ГВфрендлі'",
  ],
  srcImage: [
    "images/founders_foto1.png",
    "images/founders_foto2.png",
    "images/founders_foto3.png",
  ],
  altImage: ["Barskaya", "Kirsanova", "Bobrova"],
};

const actionsItems = {
  srcImage: [
    "images/actions1.png",
    "images/actions2.png",
    "images/actions3.png",
  ],
  altImage: ["lecture1", "lecture2", "lecture3"],
};

const documentsItems = {
  srcImage: [
    "images/documents1.png",
    "images/documents2.png",
    "images/documents3.png",
    "images/documents4.png",
  ],
  altImage: ["lecture4", "lecture5", "lecture6", "lecture7"],
};

const trainingItems = {
  srcImage: [
    "images/training1.png",
    "images/training2.png",
    "images/training3.png",
  ],
  altImage: ["training1", "training2", "training3"],
};

breatheList.addEventListener("click", selectItem);
// buttonLeft.addEventListener("click", previousFounder);
// buttonRight.addEventListener("click", nextFounder);
// actionsLeft.addEventListener("click", previousImageActions);
// actionsRight.addEventListener("click", nextImageActions);
// documentsLeft.addEventListener("click", previousImageDocuments);
// documentsRight.addEventListener("click", nextImageDocuments);
// trainingLeft.addEventListener("click", previousImageTraining);
// trainingRight.addEventListener("click", nextImageTraining);

// let a = 0;

// function changeFounderAuto() {
//   if (a >= foundersItems.titles.length) {
//     a = 0;
//   }
//   foundersTitle.textContent = foundersItems.titles[a];
//   foundersText.textContent = foundersItems.texts[a];
//   image.src = foundersItems.srcImage[a];
//   image.alt = foundersItems.altImage[a];
//   a = a + 1;
// }

// setInterval(changeFounderAuto, 4000);

let i = 0;

function nextFounder() {
  if (i >= foundersItems.titles.length - 1) {
    return;
  }
  foundersTitle.textContent = foundersItems.titles[i + 1];
  foundersText.textContent = foundersItems.texts[i + 1];
  image.src = foundersItems.srcImage[i + 1];
  image.alt = foundersItems.altImage[i + 1];
  i = i + 1;
}

function previousFounder() {
  if (i <= 0) {
    return;
  }
  foundersTitle.textContent = foundersItems.titles[i - 1];
  foundersText.textContent = foundersItems.texts[i - 1];
  image.src = foundersItems.srcImage[i - 1];
  image.alt = foundersItems.altImage[i - 1];
  i = i - 1;
}

// -----------------------------------------
const time = 3000;
const step = 1;

function outNum(num, elem) {
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n === num) {
      clearInterval(interval);
    }
    elem.innerHTML = n;
    // console.log(e.textContent);
  }, t);
}

window.addEventListener("scroll", () => {
  let posTop = window.pageYOffset;
  if (posTop > 2350 && posTop < 2500) {
    outNum(100, pediatricians);
    outNum(100, medsisters);
    outNum(100, consultants);
    outNum(100, ibclc);
  }
});
// ======================================

// ============================================
let b = 0;

function changeImageActionsAuto() {
  if (b >= actionsItems.srcImage.length) {
    b = 0;
  }
  actionsImage.src = actionsItems.srcImage[b];
  console.log(actionsImage.src);
  actionsImage.alt = actionsItems.altImage[b];
  b = b + 1;
}
setInterval(() => {
  actionsImage.classList.add("showImg");
  const timerId = setTimeout(() => {
    actionsImage.classList.remove("showImg");
  }, 4000);

  changeImageActionsAuto();
}, 8000);

let j = 0;

function nextImageActions() {
  if (j >= actionsItems.srcImage.length - 1) {
    return;
  }
  actionsImage.src = actionsItems.srcImage[j + 1];
  console.log(actionsImage.src);
  actionsImage.alt = actionsItems.altImage[j + 1];
  j = j + 1;
}

function previousImageActions() {
  if (j <= 0) {
    return;
  }
  actionsImage.src = actionsItems.srcImage[j - 1];
  actionsImage.alt = actionsItems.altImage[j - 1];
  j = j - 1;
}

let c = 0;

function changeImageDocumentsAuto() {
  if (c >= documentsItems.srcImage.length) {
    c = 0;
  }
  documentsImage.src = documentsItems.srcImage[c];
  documentsImage.alt = documentsItems.altImage[c];
  c = c + 1;
}
// setInterval(changeImageDocumentsAuto, 4000);

setInterval(() => {
  documentsImage.classList.add("showImg");
  const timerId = setTimeout(() => {
    documentsImage.classList.remove("showImg");
  }, 4000);

  changeImageDocumentsAuto();
}, 8000);

let k = 0;

function nextImageDocuments() {
  if (k >= documentsItems.srcImage.length - 1) {
    return;
  }
  documentsImage.src = documentsItems.srcImage[k + 1];
  documentsImage.alt = documentsItems.altImage[k + 1];
  k = k + 1;
}

function previousImageDocuments() {
  if (k <= 0) {
    return;
  }
  documentsImage.src = documentsItems.srcImage[k - 1];
  documentsImage.alt = documentsItems.altImage[k - 1];
  k = k - 1;
}

let d = 0;

function changeImageTrainingAuto() {
  if (d >= trainingItems.srcImage.length) {
    d = 0;
  }
  trainingImage.src = trainingItems.srcImage[d];
  trainingImage.alt = trainingItems.altImage[d];
  d = d + 1;
}
// setInterval(changeImageTrainingAuto, 4000);

setInterval(() => {
  trainingImage.classList.add("showImg");
  const timerId = setTimeout(() => {
    trainingImage.classList.remove("showImg");
  }, 4000);

  changeImageTrainingAuto();
}, 8000);

let m = 0;

function nextImageTraining() {
  if (m >= trainingItems.srcImage.length - 1) {
    return;
  }
  trainingImage.src = trainingItems.srcImage[m + 1];
  console.log(trainingImage.src);
  trainingImage.alt = trainingItems.altImage[m + 1];
  m = m + 1;
}

function previousImageTraining() {
  if (m <= 0) {
    return;
  }
  trainingImage.src = trainingItems.srcImage[m - 1];
  trainingImage.alt = trainingItems.altImage[m - 1];
  m = m - 1;
}

function selectItem(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const button = document.querySelectorAll(".breathe_header3");
  console.log(button);
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("underlined");
  }

  const selectedItem = event.target.dataset.text;
  console.log(event.target);
  output.textContent = `${selectedItem}`;

  event.target.classList.add("underlined");
}

// Some helper functions to render palette items
// createTextItems();

// function createTextItems() {
//   const textItems = {
//     headers: ["Цінності", "Принципи", "Місія"],
//     texts: [
//       "Грудне вигодовування - це стратегія порятунку  дітей. Ми вважаємо, що кожна родина в Україні має отримувати  допомогу та підтримку від медичних працівників в питаннях грудного вигодовування. Підготовка лікарів, медичних сестер та інших залучених фахівців має відбуватися згідно з сучасними стандартами та відповідно до позицій авторитетних медичних організацій. Це буде сприяти тому, що максимальна кількість дітей будуть годуватися грудьми та/або отримуватимуть грудне молоко.",
//       "Ми є адептами доказової медицини грудного вигодовування. Ми поважаємо та виконуємо кодекс маркетингу замінників грудного молока. Ми лагідно та шанобливо ставимося до родин, підтримуючи їх вибір.",
//       "Ми- члени Української Академії Медицини Грудного Вигодовування  хочемо змінити ставлення медичних працівників до медицини грудного вигодовування.Лактаційна медицина - повносправна частина медичної науки. Ми хочемо, аби ця галузь зайняла гідне місце в системі медичної освіти України.",
//     ],
//   };

//   const items = [];
//   for (let i = 0; i < 3; i++) {
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.text = textItems.texts[i];

//     item.classList.add("breathe_header3");

//     item.textContent = textItems.headers[i];
//     items.push(item);
//   }
//   items[0].classList.add("underlined");
//   console.log(items);
//   breatheList.append(...items);
// }

const images = document.querySelectorAll(".founders_foto .image");
const titles = document.querySelectorAll(".founders_info .founders_title");
const texts = document.querySelectorAll(".founders_info .founders_text");
console.log("images ", images);
let currentImage = 0;
const imageInterval = setInterval(nextImage, 4000);

function nextImage() {
  images[currentImage].className = "image";
  titles[currentImage].className = "founders_title";
  texts[currentImage].className = "founders_text";
  currentImage = (currentImage + 1) % images.length;
  console.log("currentImage ", currentImage);
  images[currentImage].className = "image showing";
  titles[currentImage].className = "founders_title showing";
  texts[currentImage].className = "founders_text showing";
}
