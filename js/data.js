// Коэффициенты активности
let ACTIVITY_COEFFICIENTS = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9
};

// Коэффициенты для рассчёта набора / сброса веса
let CHANGE_WEIGHT_COEFFICIENTS = {
    loss: 0.85,
    gain: 1.15
};


export {ACTIVITY_COEFFICIENTS, CHANGE_WEIGHT_COEFFICIENTS};