import {ACTIVITY_COEFFICIENTS, CHANGE_WEIGHT_COEFFICIENTS} from "./data.js";


// Формула поддержания веса для женщин / мужчин
let maintainWeight = function (sex, age, height, weight, activityCoefficient) {
    // Основная формула
    let norm = 10 * weight + 6.25 * height - 5 * age;

    // Учёт пола (по формулам)
    if (sex === 'male') {
        norm += 5;
    } else if (sex === 'female') {
        norm -= 161;
    }

    return Math.floor(ACTIVITY_COEFFICIENTS[activityCoefficient.toString()] * norm);
};

// Формула для сброса веса
let lossWeight = function (norm) {
    return Math.floor(norm * CHANGE_WEIGHT_COEFFICIENTS["loss"]);
};

// Формула для набора веса
let gainWeight = function (norm) {
    return Math.floor(norm * CHANGE_WEIGHT_COEFFICIENTS["gain"]);
};

// Функция поиска выбранной радио-кнопки
let getCheckedRadioButton = function (radios) {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return  radios[i].value.toString();
        }
    }
};


export {maintainWeight, lossWeight, gainWeight, getCheckedRadioButton}