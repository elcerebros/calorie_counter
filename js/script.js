import {maintainWeight, lossWeight, gainWeight, getCheckedRadioButton} from "./util.js";


// Кнопка отправки формы
const countNode = document.querySelector(".form__submit-button");
// Кнопка очистки полей
const resetNode = document.querySelector(".form__reset-button");

// Секция с результатами
const counterSectionNode = document.querySelector(".counter__result");
// Узлы с рассчитанными калориями
const normalWeightNode = document.querySelector("#calories-norm");
const minimalWeightNode = document.querySelector("#calories-minimal");
const maximalWeightNode = document.querySelector("#calories-maximal");

// Списки радио-кнопок с выбором пола и вида активности
const genderRadios = document.getElementsByName("gender");
const activityRadios = document.getElementsByName("activity");
// Узлы со значениями возраста, роста и веса
const ageNode = document.querySelector("#age");
const heightNode = document.querySelector("#height");
const weightNode = document.querySelector("#weight");


// Добавление хэндлеров
addFormInputHandler(ageNode);
addFormInputHandler(heightNode);
addFormInputHandler(weightNode);

// Хэндлер для активации кнопок
function addFormInputHandler (input) {
    input.addEventListener('input', function () {
        // Активация кнопки countButton, если все поля заполнены
        if (ageNode.value !== "" && heightNode.value !== "" && weightNode.value !== "") {
            countNode.disabled = false;
        }
        // Активация кнопки очистки resetButton
        resetNode.disabled = false;
    });
};


// Логика очистки полей при нажатии на кнопку resetButton
resetNode.addEventListener('click', function (evt) {
    // Убираем дефолтное действие, так как при деактивации кнопки, оно не срабатывает
    evt.preventDefault();

    // Деактивация кнопки countButton
    countNode.disabled = true;
    // Деактивация кнопки resetButton
    resetNode.disabled = true;
    // Скрытие секции с результатами
    counterSectionNode.classList.add("counter__result--hidden");

    // Очистка полей и проставление дефолтных значений
    ageNode.value = "";
    heightNode.value = "";
    weightNode.value = "";
    genderRadios[0].checked = true;
    activityRadios[0].checked = true;
});


// Логика подсчёта результатов при отправке формы counter__form
countNode.addEventListener('click', function (evt) {
    // Убираем дефолтную отправку формы
    evt.preventDefault();

    // Получаем значения выбранных радио-кнопок
    let gender = getCheckedRadioButton(genderRadios);
    let activity = getCheckedRadioButton(activityRadios);

    // Рассчёт результатов
    let normWeight = maintainWeight(gender, ageNode.value, heightNode.value, weightNode.value, activity);
    let lowWeight = lossWeight(normWeight);
    let highWeight = gainWeight(normWeight);

    // Вывод результатов в секцию counter__result
    normalWeightNode.textContent = normWeight.toString();
    minimalWeightNode.textContent = lowWeight.toString();
    maximalWeightNode.textContent = highWeight.toString();
    // Появление блока с результатами
    counterSectionNode.classList.remove("counter__result--hidden");
});