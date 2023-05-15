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

let form = document.querySelector('.form');
let brandSelect = document.getElementById('brandSelect');
let modelAutoSelect = document.getElementById('modelAutoSelect');
const result = document.querySelector('.result')
const ownerQuantity = document.querySelector('.owner')

let arrPriceCalc = [];

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


brandSelect.addEventListener('change',showModelAuto);
modelAutoSelect.addEventListener('change',getPriceToArray);
usedRadiobox.addEventListener('change',showOwner);

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
        default:
            arrPriceCalc
            break
    }    
}

function getObjModelRenderPage(obj, elementPage) {
    elementPage.innerHTML = '<option hidden>модель</option>';
    for(key in obj){
        const option = document.createElement('option');
        option.value = obj[key];
        option.innerText = key;
        elementPage.append(option);
    }
}

function getPriceToArray(event) {
    arrPriceCalc[0] = event.target.value;
    console.log(arrPriceCalc);
}

function showOwner(event) {
    ownerQuantity.classList.remove('none')
}

function getPrice() {
    if (volumeInput.value < 2) {
        arrPriceCalc[1] = arrPriceCalc[0]*1
    } else {
        arrPriceCalc[1] = arrPriceCalc[0]*1.3
    }

    if (petrolRadiobox.checked = true) {
        arrPriceCalc[2] = arrPriceCalc[1]*1
    } else if (dieselRadiobox.checked = true) {
        arrPriceCalc[2] = arrPriceCalc[1]*1.1
    } else if (gasRadiobox.checked = true) {
        arrPriceCalc[2] = arrPriceCalc[1]*1.2
    } else if (electricityRadiobox.checked = true) {
        arrPriceCalc[2] = arrPriceCalc[1]*1.3
    } else {
        alert('Выберите тип топлива!')
    }

    if (usedRadiobox.checked = true) {
        if (fewRadiobox.checked = true) {
            arrPriceCalc[3] = arrPriceCalc[2]*0.8
        } else if (manyRadiobox.checked = true) {
            arrPriceCalc[3] = arrPriceCalc[2]*0.6
        } else {
            alert('Выберите количество владельцев!')
        }            
    } else if (newRadiobox.checked = true) {
        arrPriceCalc[3] = arrPriceCalc[2]*1
    } else {
        alert('Выберите состояние!')
    }

    if (cashRadiobox.checked = true) {
        arrPriceCalc[4] = arrPriceCalc[3]*1
    } else if ((cardRadiobox.checked = true)||(companyRadiobox.checked = true)) {
        arrPriceCalc[4] = arrPriceCalc[3]*1.1
    } else {
        alert('Выберите способ оплаты!')
    }


}