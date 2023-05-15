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

let form = document.querySelector('.form')
let brandSelect = document.getElementById('brandSelect')
let modelAutoSelect = document.getElementById('modelAutoSelect')

brandSelect.addEventListener('change',showModelAuto);

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

function getObjModelRenderPage(obj, elementPage) {
    elementPage.innerHTML = '';
    for(key in obj){
        const option = document.createElement('option');
        option.value = obj[key];
        option.innerText = key;
        elementPage.appendChild(option);
    }
}