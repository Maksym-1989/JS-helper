const btnOneRef = document.querySelector(".btn-one");
const btnTwoRef = document.querySelector(".btn-two");
const form = document.querySelector(".form");
const inputRef = document.querySelector(".input");

function onClick(event) {
  console.dir(event);
}

btnOneRef.addEventListener("click", onClick); //обработчик клика по елем//

btnTwoRef.addEventListener("click", () => {
  btnOneRef.removeEventListener("click", onClick); //снятие слушателя событий//
});

//////////////////////////форма/////////////////////////////////

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const name = event.currentTarget.elements.name.value;
  // const lastName = event.currentTarget.elements.lastName.value;

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(value);
  });
}
////////////////////////////input///////////////////
inputRef.addEventListener("focus", () => {}); //слушатель при фокусе
inputRef.addEventListener("blur", () => {}); //слушатель при удалении фокуса
inputRef.addEventListener("input", () => {}); // изменение инпута
inputRef.addEventListener("change", () => {}); // для чекбокса

/////////////////////////клавиатура////////////////////////////////
window.addEventListener("keypress", () => {}); // для прошлушивания клавиатуры без сист. клавиш
window.addEventListener("keydown", () => {}); // для любой клавиши
window.addEventListener("keyup", () => {}); //

/////////////////////////мышь////////////////////////////////
window.addEventListener("mouseover", () => {}); //Курсор мыши появляется над элементом
window.addEventListener("mouseout", () => {}); //Курсор мыши уходит от элементa .
window.addEventListener("contextmenu", () => {}); //открытия контекстного меню, как правило, нажатием правой кнопки мыши
window.addEventListener("mousemove", (event) => {}); //Каждое движение мыши над элементом генерирует это событие.
