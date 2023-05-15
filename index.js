
//объекты с базовой ценой по моделям

const renaultModels = {
    'Logan': 10000,
    'Stepway': 20000,
    'Fluence': 30000
}

const mazdaModels = {
    '2': 20000,
    '3': 30000,
    '6': 40000,
    'CX-90': 60000
}

const opelModels = {
    'Astra': 20000,
    'Vectra': 30000,
    'Meriva': 40000
}

const mercedesModels = {
    'A-class': 35000,
    'C-class': 45000,
    'E-class': 60000,
    'S-class': 120000
}


// элементы разметки

let form = document.querySelector('.form');
let brandSelect = document.getElementById('brandSelect');
let modelAutoSelect = document.getElementById('modelAutoSelect');
const ownerQuantity = document.querySelector('.owner');
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const cleanButton = document.querySelector('.clean');

// массивы

let arrPriceCalc = [];

// инпуты и радиокнопки

const volumeInput = document.getElementById('volume');
const petrolRadiobox = document.getElementById('petrol');
const dieselRadiobox = document.getElementById('diesel');
const gasRadiobox = document.getElementById('gas');
const electricityRadiobox = document.getElementById('electricity');
const newRadiobox = document.getElementById('new');
const usedRadiobox = document.getElementById('used');
const fewRadiobox = document.getElementById('few');
const manyRadiobox = document.getElementById('many');
const cashRadiobox = document.getElementById('cash');
const cardRadiobox = document.getElementById('card');
const companyRadiobox = document.getElementById('company');

// ивентлистенеры

brandSelect.addEventListener('change',showModelAuto);
modelAutoSelect.addEventListener('change',getPriceToArray);
usedRadiobox.addEventListener('change',showOwner);
button.addEventListener('click',showResultPrice);
cleanButton.addEventListener('click',cleanForm);


// функция для показа списка моделей авто в зависмости от выбранного бренда
function showModelAuto(event) {
    switch (event.target.value) {
        case 'Renault':
            getObjModelRenderPage(renaultModels,modelAutoSelect)
            break
        case 'Mazda':
            getObjModelRenderPage(mazdaModels,modelAutoSelect)
            break
        case 'Opel':
            getObjModelRenderPage(opelModels,modelAutoSelect)
            break
        case 'Mercedes':
            getObjModelRenderPage(mercedesModels,modelAutoSelect)
            break
    }    
}


//функция для заполнения селекта с моделями
function getObjModelRenderPage(obj, elementPage) {
    elementPage.innerHTML = '<option hidden>модель</option>';
    for(key in obj){
        const option = document.createElement('option');
        option.value = obj[key];
        option.textContent = key;
        elementPage.append(option);
    }
}


//функция для добавления базовой цены в массив в качестве значения с индексом 0
function getPriceToArray(event) {
    arrPriceCalc[0] = event.target.value;
}


//функция для показа блока радиокнопок с кол-вом владельцев, если авто подержанное
function showOwner(event) {
    ownerQuantity.classList.remove('none')
}


//функция для добавления цены с коэфициентом в зав-ти от выбранных опций в массив. Последнее значение - итоговая цена.
function showResultPrice(event) {
    event.preventDefault();
    //в зав-ти от объема двигателя
    if (volumeInput.value < 2) {
        arrPriceCalc[1] = arrPriceCalc[0]*1
    } else {
        arrPriceCalc[1] = arrPriceCalc[0]*1.3
    }

    //в зав-ти от типа топлива
    if (petrolRadiobox.checked) {
        arrPriceCalc[2] = arrPriceCalc[1]*1
    } else if (dieselRadiobox.checked) {
        arrPriceCalc[2] = arrPriceCalc[1]*1.1
    } else if (gasRadiobox.checked) {
        arrPriceCalc[2] = arrPriceCalc[1]*1.2
    } else if (electricityRadiobox.checked) {
        arrPriceCalc[2] = arrPriceCalc[1]*1.3
    } else {
        alert('Выберите тип топлива!')
    }

    //в зав-ти от состояния и кол-ва владельцев
    if (usedRadiobox.checked) {
        if (fewRadiobox.checked) {
            arrPriceCalc[3] = arrPriceCalc[2]*0.8
        } else if (manyRadiobox.checked) {
            arrPriceCalc[3] = arrPriceCalc[2]*0.6
        } else {
            alert('Выберите количество владельцев!')
        }            
    } else if (newRadiobox.checked) {
        arrPriceCalc[3] = arrPriceCalc[2]*1
    } else {
        alert('Выберите состояние!')
    }

    //в зав-ти от способа оплаты
    if (cashRadiobox.checked) {
        arrPriceCalc[4] = arrPriceCalc[3]*1
    } else if ((cardRadiobox.checked)||(companyRadiobox.checked)) {
        arrPriceCalc[4] = arrPriceCalc[3]*1.1
    } else {
        alert('Выберите способ оплаты!')
    }

    //выводим итог в див под кнопкой рассчитать
    result.textContent = Math.round(arrPriceCalc[4]);
}


//функция для очистки калькулятора
function cleanForm(event) {
    form.reset();
    result.textContent = '';
}

